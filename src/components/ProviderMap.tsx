"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { BookableProvider } from "@/lib/booking";

const money = (n: number) =>
  n === 0 ? "Free" : `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`;

const initial = (name: string) => (name.trim()[0] || "?").toUpperCase();

// Escape for safe interpolation into the divIcon HTML string.
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// A circular profile-photo pin (falls back to the pro's initial on a pink chip).
function avatarIcon(p: BookableProvider): L.DivIcon {
  const ring =
    "border:3px solid #fff;box-shadow:0 6px 16px -4px rgba(163,11,69,0.7),0 0 0 2px #c11a63;";
  const inner = p.avatarUrl
    ? `<div style="width:46px;height:46px;border-radius:9999px;${ring}
         background:#eee center/cover no-repeat url('${esc(encodeURI(p.avatarUrl))}');"></div>`
    : `<div style="width:46px;height:46px;border-radius:9999px;${ring}
         display:flex;align-items:center;justify-content:center;
         background:linear-gradient(135deg,#c11a63 0%,#961049 100%);
         color:#fff;font-weight:700;font-size:18px;font-family:sans-serif;">${esc(initial(p.name))}</div>`;
  return L.divIcon({
    className: "",
    html: `<div style="position:relative;">${inner}
      <div style="position:absolute;left:50%;bottom:-6px;width:10px;height:10px;
        transform:translateX(-50%) rotate(45deg);background:#fff;
        box-shadow:2px 2px 3px -1px rgba(163,11,69,0.4);"></div></div>`,
    iconSize: [46, 52],
    iconAnchor: [23, 52],
    popupAnchor: [0, -50],
  });
}

// Best available location text: full street address, else "City, State".
function locationLine(p: BookableProvider): string | null {
  if (p.address) return p.address;
  const cityState = [p.city, p.state].filter(Boolean).join(", ");
  return cityState || p.city || null;
}

function priceRange(p: BookableProvider): string {
  if (p.services.length === 0) return "";
  const prices = p.services.map((s) => s.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? money(min) : `${money(min)}–${money(max)}`;
}

function FitBounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length === 0) return;
    if (points.length === 1) {
      map.setView(points[0], 11);
    } else {
      map.fitBounds(points, { padding: [50, 50] });
    }
  }, [map, points]);
  return null;
}

export default function ProviderMap({
  providers,
  onBook,
}: {
  providers: BookableProvider[];
  onBook: (providerId: string) => void;
}) {
  const located = useMemo(
    () => providers.filter((p) => p.lat != null && p.lng != null),
    [providers]
  );
  const points = useMemo(
    () => located.map((p) => [p.lat as number, p.lng as number] as [number, number]),
    [located]
  );

  return (
    <MapContainer
      center={[39.8, -98.6]}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds points={points} />
      {located.map((p) => (
        <Marker
          key={p.id}
          position={[p.lat as number, p.lng as number]}
          icon={avatarIcon(p)}
        >
          <Popup>
            <div style={{ minWidth: 200, maxWidth: 240 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {p.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.avatarUrl}
                    alt={p.name}
                    width={40}
                    height={40}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 9999,
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                ) : null}
                <div>
                  <div style={{ fontWeight: 700, color: "#24141c", fontSize: 14 }}>
                    {p.name}
                  </div>
                </div>
              </div>

              {locationLine(p) && (
                <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a30b45"
                    strokeWidth={2}
                    style={{ flexShrink: 0, marginTop: 2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div style={{ fontSize: 12, color: "#4a3640", lineHeight: 1.35 }}>
                    <div>{locationLine(p)}</div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#c11a63", fontWeight: 600, textDecoration: "none" }}
                    >
                      Get directions →
                    </a>
                  </div>
                </div>
              )}

              <div
                style={{
                  marginTop: 8,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#a30b45",
                }}
              >
                Services{priceRange(p) ? ` · ${priceRange(p)}` : ""}
              </div>
              <ul
                style={{
                  margin: "4px 0 0",
                  padding: 0,
                  listStyle: "none",
                  maxHeight: 132,
                  overflowY: "auto",
                }}
              >
                {p.services.map((s) => (
                  <li
                    key={s.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 8,
                      fontSize: 12.5,
                      color: "#4a3640",
                      padding: "3px 0",
                      borderBottom: "1px solid #f6e6ee",
                    }}
                  >
                    <span>{s.title}</span>
                    <span style={{ color: "#6f5a64", whiteSpace: "nowrap" }}>
                      {money(s.price)}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onBook(p.id)}
                style={{
                  marginTop: 10,
                  width: "100%",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 9999,
                  padding: "9px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#fff",
                  background: "linear-gradient(135deg,#c11a63 0%,#961049 100%)",
                }}
              >
                Book with {p.name.split(" ")[0]}
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
