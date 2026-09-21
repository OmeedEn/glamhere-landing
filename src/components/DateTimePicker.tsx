"use client";

import { useEffect, useMemo, useState } from "react";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const pad = (n: number) => String(n).padStart(2, "0");
const ymd = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;

function to12h(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h < 12 ? "AM" : "PM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${pad(m)} ${period}`;
}

/**
 * Combined date + time picker in one card: a month calendar that greys out
 * blocked days, and — once a day is chosen — clickable time-slot chips right
 * below it. Both open days and open times come from the same availability rules
 * the booking trigger enforces.
 */
export default function DateTimePicker({
  providerId,
  serviceId,
  date,
  time,
  onDateChange,
  onTimeChange,
}: {
  providerId: string;
  serviceId: string;
  date: string;
  time: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}) {
  const now = useMemo(() => new Date(), []);
  const todayStr = ymd(now.getFullYear(), now.getMonth(), now.getDate());

  const [view, setView] = useState({ y: now.getFullYear(), m: now.getMonth() });
  const [daysByKey, setDaysByKey] = useState<Record<string, string[]>>({});
  const [slotsByKey, setSlotsByKey] = useState<Record<string, string[]>>({});

  const monthKey = `${providerId}|${serviceId}|${view.y}-${pad(view.m + 1)}`;
  const cachedDays = daysByKey[monthKey];
  const daysLoading = !!serviceId && cachedDays === undefined;
  const openSet = useMemo(() => new Set(cachedDays ?? []), [cachedDays]);

  const slotKey = date ? `${providerId}|${serviceId}|${date}` : "";
  const cachedSlots = slotKey ? slotsByKey[slotKey] : undefined;
  const slotsLoading = !!date && cachedSlots === undefined;
  const slots = cachedSlots ?? [];

  // Fetch open days for the visible month.
  useEffect(() => {
    if (!providerId || !serviceId || cachedDays !== undefined) return;
    let cancelled = false;
    (async () => {
      const first = ymd(view.y, view.m, 1);
      const lastDay = new Date(view.y, view.m + 1, 0).getDate();
      const last = ymd(view.y, view.m, lastDay);
      let result: string[] = [];
      try {
        const res = await fetch(
          `/api/available-days?providerId=${providerId}&serviceId=${serviceId}&from=${first}&to=${last}`
        );
        const data = await res.json().catch(() => ({ days: [] }));
        result = Array.isArray(data.days) ? data.days : [];
      } catch {
        result = [];
      }
      if (!cancelled) setDaysByKey((prev) => ({ ...prev, [monthKey]: result }));
    })();
    return () => {
      cancelled = true;
    };
  }, [providerId, serviceId, monthKey, cachedDays, view.y, view.m]);

  // Fetch open times for the selected day.
  useEffect(() => {
    if (!providerId || !serviceId || !date || cachedSlots !== undefined) return;
    let cancelled = false;
    (async () => {
      let result: string[] = [];
      try {
        const res = await fetch(
          `/api/availability?providerId=${providerId}&serviceId=${serviceId}&date=${date}`
        );
        const data = await res.json().catch(() => ({ slots: [] }));
        result = Array.isArray(data.slots) ? data.slots : [];
      } catch {
        result = [];
      }
      if (!cancelled) setSlotsByKey((prev) => ({ ...prev, [slotKey]: result }));
    })();
    return () => {
      cancelled = true;
    };
  }, [providerId, serviceId, date, slotKey, cachedSlots]);

  const firstDow = new Date(view.y, view.m, 1).getDay();
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const atCurrentMonth = view.y === now.getFullYear() && view.m === now.getMonth();

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
    <div className="rounded-2xl border border-[#f3d8e4] bg-white p-3 sm:p-4">
      {/* Month header */}
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

      {/* Day grid */}
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
          const isSelected = date === dateStr;
          const disabled = isPast || !isOpen;

          return (
            <button
              key={dateStr}
              type="button"
              disabled={disabled}
              onClick={() => {
                onDateChange(dateStr);
                onTimeChange("");
              }}
              title={isPast ? "Past" : isOpen ? "Available" : "Not available"}
              className={[
                "flex h-9 items-center justify-center rounded-lg text-sm transition",
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

      {/* Legend */}
      <div className="mt-3 flex items-center gap-4 px-1 text-[11px] text-[#6f5a64]">
        {daysLoading ? (
          <span>Checking availability…</span>
        ) : (
          <>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3 w-3 rounded bg-[#fff1f7] ring-1 ring-[#f3d8e4]" />
              Available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3 w-3 rounded bg-white ring-1 ring-[#eee]" />
              <span className="text-[#cdb9c2] line-through">Blocked</span>
            </span>
          </>
        )}
      </div>

      {/* Time slots — same card, appear once a day is picked */}
      {date && (
        <div className="mt-4 border-t border-[#f3e2eb] pt-4">
          <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#a30b45]">
            Start time
          </p>
          {slotsLoading ? (
            <p className="px-1 text-sm text-[#6f5a64]">Checking times…</p>
          ) : slots.length === 0 ? (
            <p className="px-1 text-sm text-[#6f5a64]">
              No open times that day — pick another day.
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {slots.map((s) => {
                const selected = time === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => onTimeChange(s)}
                    className={[
                      "rounded-lg border px-2 py-2 text-sm font-medium transition",
                      selected
                        ? "border-transparent bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] text-white"
                        : "border-[#f3d8e4] bg-[#fff7fb] text-[#a30b45] hover:border-[#c11a63]/50 hover:bg-[#fff1f7]",
                    ].join(" ")}
                  >
                    {to12h(s)}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
