import { ImageResponse } from "next/og";

export const alt = "Beyond Nails & Spa — Nail Salon in Union, NJ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(140deg, #fbf9f7 0%, #f0ecf6 55%, #e5d7e6 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#7c6b94",
          }}
        >
          Union · New Jersey
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 96,
            fontWeight: 600,
            color: "#1c161b",
            textAlign: "center",
          }}
        >
          Beyond Nails &amp; Spa
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 34,
            fontStyle: "italic",
            color: "#55486b",
          }}
        >
          Nails, beyond the ordinary.
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 18,
            fontSize: 24,
            color: "#4a4048",
          }}
        >
          <span>Manicures</span>
          <span style={{ color: "#c9bfda" }}>·</span>
          <span>Pedicures</span>
          <span style={{ color: "#c9bfda" }}>·</span>
          <span>Nail Art</span>
          <span style={{ color: "#c9bfda" }}>·</span>
          <span>Lashes &amp; Brows</span>
        </div>
      </div>
    ),
    size
  );
}
