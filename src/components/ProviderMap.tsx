"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { BookableProvider } from "@/lib/booking";

const money = (n: number) =>
  n === 0 ? "Free" : `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`;

// On-brand teardrop pin as an inline HTML icon (avoids Leaflet's broken default
// marker asset paths under bundlers).
const pinIcon = L.divIcon({
  className: "",
  html: `<div style="
      width:26px;height:26px;border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      background:linear-gradient(135deg,#c11a63 0%,#961049 100%);
      border:2px solid #fff;
      box-shadow:0 6px 14px -4px rgba(163,11,69,0.7);"></div>`,
  iconSize: [26, 26],
  iconAnchor: [13, 24],
  popupAnchor: [0, -22],
});

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
      map.fitBounds(points, { padding: [40, 40] });
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
        <Marker key={p.id} position={[p.lat as number, p.lng as number]} icon={pinIcon}>
          <Popup>
            <div style={{ minWidth: 180 }}>
              <div style={{ fontWeight: 700, color: "#24141c", fontSize: 14 }}>
                {p.name}
              </div>
              {p.city && (
                <div style={{ color: "#6f5a64", fontSize: 12, marginTop: 2 }}>
                  {p.city}
                </div>
              )}
              <div style={{ color: "#a30b45", fontSize: 12, marginTop: 4 }}>
                {p.services.length} service{p.services.length === 1 ? "" : "s"}
                {priceRange(p) ? ` · ${priceRange(p)}` : ""}
              </div>
              <button
                type="button"
                onClick={() => onBook(p.id)}
                style={{
                  marginTop: 10,
                  width: "100%",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 9999,
                  padding: "8px 14px",
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
