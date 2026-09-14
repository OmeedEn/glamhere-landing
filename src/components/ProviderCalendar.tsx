"use client";

import { useEffect, useMemo, useState } from "react";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const pad = (n: number) => String(n).padStart(2, "0");
const ymd = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;

export default function ProviderCalendar({
  providerId,
  serviceId,
  value,
  onChange,
}: {
  providerId: string;
  serviceId: string;
  value: string;
  onChange: (dateStr: string) => void;
}) {
  const now = useMemo(() => new Date(), []);
  const todayStr = ymd(now.getFullYear(), now.getMonth(), now.getDate());

  const [view, setView] = useState({ y: now.getFullYear(), m: now.getMonth() });
  // Cache of open dates keyed by provider|service|YYYY-MM.
  const [daysByKey, setDaysByKey] = useState<Record<string, string[]>>({});

  const monthKey = `${providerId}|${serviceId}|${view.y}-${pad(view.m + 1)}`;
  const cached = daysByKey[monthKey];
  const loading = !!serviceId && cached === undefined;
  const openSet = useMemo(() => new Set(cached ?? []), [cached]);

  useEffect(() => {
    if (!providerId || !serviceId) return;
    if (cached !== undefined) return;
    let cancelled = false;
    (async () => {
      const first = ymd(view.y, view.m, 1);
      const lastDay = new Date(view.y, view.m + 1, 0).getDate();
      const last = ymd(view.y, view.m, lastDay);
      let days: string[] = [];
      try {
        const res = await fetch(
          `/api/available-days?providerId=${providerId}&serviceId=${serviceId}&from=${first}&to=${last}`
        );
        const data = await res.json().catch(() => ({ days: [] }));
        days = Array.isArray(data.days) ? data.days : [];
      } catch {
        days = [];
      }
      if (!cancelled) setDaysByKey((prev) => ({ ...prev, [monthKey]: days }));
    })();
    return () => {
      cancelled = true;
    };
  }, [providerId, serviceId, monthKey, cached, view.y, view.m]);

  const firstDow = new Date(view.y, view.m, 1).getDay();
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const atCurrentMonth =
    view.y === now.getFullYear() && view.m === now.getMonth();

  function shiftMonth(delta: number) {
    setView((v) => {
      const d = new Date(v.y, v.m + delta, 1);
      return { y: d.getFullYear(), m: d.getMonth() };
    });
  }

  const cells: (number | null)[] = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="rounded-xl border border-[#f3d8e4] bg-white p-3">
      <div className="mb-2 flex items-center justify-between px-1">
        <button
          type="button"
          onClick={() => shiftMonth(-1)}
          disabled={atCurrentMonth}
          aria-label="Previous month"
          className="flex h-8 w-8 items-center justify-center rounded-full text-[#a30b45] transition hover:bg-[#fff1f7] disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <span className="text-sm font-semibold text-[#24141c]">
          {MONTHS[view.m]} {view.y}
        </span>
        <button
          type="button"
          onClick={() => shiftMonth(1)}
          aria-label="Next month"
          className="flex h-8 w-8 items-center justify-center rounded-full text-[#a30b45] transition hover:bg-[#fff1f7]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((w) => (
          <div key={w} className="py-1 text-[11px] font-semibold uppercase tracking-wide text-[#b59aa4]">
            {w}
          </div>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <div key={`b${i}`} />;
          const dateStr = ymd(view.y, view.m, day);
          const isPast = dateStr < todayStr;
          const isOpen = openSet.has(dateStr);
          const isSelected = value === dateStr;
          const disabled = isPast || !isOpen;

          return (
            <button
              key={dateStr}
              type="button"
              disabled={disabled}
              onClick={() => onChange(dateStr)}
              title={
                isPast ? "Past" : isOpen ? "Available" : "Not available"
              }
              className={[
                "relative flex h-9 items-center justify-center rounded-lg text-sm transition",
                isSelected
                  ? "bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] font-semibold text-white"
                  : isOpen && !isPast
                  ? "bg-[#fff1f7] font-medium text-[#a30b45] hover:bg-[#f9d5e5]"
                  : "text-[#cdb9c2] line-through",
                disabled && !isSelected ? "cursor-not-allowed" : "",
              ].join(" ")}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex items-center gap-4 px-1 text-[11px] text-[#6f5a64]">
        {loading ? (
          <span>Checking availability…</span>
        ) : (
          <>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3 w-3 rounded bg-[#fff1f7] ring-1 ring-[#f3d8e4]" />
              Available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3 w-3 rounded bg-white ring-1 ring-[#eee]" />
              <span className="line-through text-[#cdb9c2]">Blocked</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
}
