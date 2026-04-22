import createImageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";
import { dataset, isSanityConfigured, projectId } from "../../../sanity/env";

const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlForImage(source: SanityImageSource | undefined | null) {
  if (!source || !builder) return null;
  return builder.image(source);
}

export function imageUrl(
  source: SanityImageSource | undefined | null,
  opts?: { width?: number; height?: number; quality?: number }
): string | null {
  const b = urlForImage(source);
  if (!b) return null;
  let out = b.auto("format").fit("max");
  if (opts?.width) out = out.width(opts.width);
  if (opts?.height) out = out.height(opts.height);
  if (opts?.quality) out = out.quality(opts.quality);
  return out.url();
}
