"""Auto-trim the white padding around each phone screenshot in public/screens/.

Originals are moved to public/screens/_original/ on first run, and the trimmed
output overwrites the served file. Safe to re-run — it always reads from
_original/ when present.
"""

from __future__ import annotations

import shutil
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "screens"
BACKUP = SRC / "_original"
PADDING = 0
# a pixel counts as "foreground" if any channel is darker than this
BG_CUTOFF = 245
# a row/column is "padding" if less than this fraction of its pixels are foreground.
# Tolerates JPEG noise and stray specks near the edge.
MIN_FG_FRACTION = 0.05


def trim_white(img: Image.Image) -> Image.Image:
    rgb = img.convert("RGB")
    w, h = rgb.size
    px = rgb.load()

    def is_fg(c: tuple[int, int, int]) -> bool:
        return any(ch < BG_CUTOFF for ch in c)

    def row_fg_fraction(y: int) -> float:
        return sum(1 for x in range(w) if is_fg(px[x, y])) / w

    def col_fg_fraction(x: int) -> float:
        return sum(1 for y in range(h) if is_fg(px[x, y])) / h

    top = 0
    while top < h and row_fg_fraction(top) < MIN_FG_FRACTION:
        top += 1
    bottom = h - 1
    while bottom > top and row_fg_fraction(bottom) < MIN_FG_FRACTION:
        bottom -= 1
    left = 0
    while left < w and col_fg_fraction(left) < MIN_FG_FRACTION:
        left += 1
    right = w - 1
    while right > left and col_fg_fraction(right) < MIN_FG_FRACTION:
        right -= 1

    left = max(0, left - PADDING)
    top = max(0, top - PADDING)
    right = min(w, right + 1 + PADDING)
    bottom = min(h, bottom + 1 + PADDING)
    return rgb.crop((left, top, right, bottom))


def main() -> None:
    BACKUP.mkdir(exist_ok=True)
    jpegs = sorted(p for p in SRC.iterdir() if p.is_file() and p.suffix.lower() in {".jpg", ".jpeg", ".png"})
    for src_path in jpegs:
        backup_path = BACKUP / src_path.name
        if not backup_path.exists():
            shutil.copy2(src_path, backup_path)
            source_for_read = src_path
        else:
            # re-run: always start from the original so we don't double-crop
            source_for_read = backup_path

        with Image.open(source_for_read) as img:
            cropped = trim_white(img)
            save_kwargs = {"quality": 92, "optimize": True} if src_path.suffix.lower() in {".jpg", ".jpeg"} else {}
            cropped.save(src_path, **save_kwargs)
            print(f"{src_path.name}: {img.size} -> {cropped.size}")


if __name__ == "__main__":
    main()
