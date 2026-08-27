import { ImageResponse } from "next/og";

export const alt = "Royal Horizon Limited — Supplying Solutions, Building Success.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f3ef",
          color: "#172033",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              height: 58,
              width: 58,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "#ff5a1f",
              color: "white",
              fontSize: 25,
              fontWeight: 900,
            }}
          >
            RH
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 800 }}>
            Royal Horizon Limited
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
          <div style={{ display: "flex", color: "#ff5a1f", fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>
            MALAWI&apos;S INTEGRATED SUPPLY PARTNER
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 70, lineHeight: 1.02, fontWeight: 900, letterSpacing: -3 }}>
            Supplying Solutions, Building Success.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#64748b", fontSize: 20 }}>
          <div style={{ display: "flex" }}>Medical · ICT · Solar · Industrial · General Supply</div>
          <div style={{ display: "flex" }}>royalhorizonmw.com</div>
        </div>
      </div>
    ),
    size,
  );
}
