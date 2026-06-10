import { ImageResponse } from "next/og";

export const alt = "Naomi Ivie — founder of Sabi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#f7f8f4",
          color: "#121417",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: 0,
            textTransform: "uppercase",
            color: "#60676b",
          }}
        >
          <span>Naomi Ivie</span>
          <span>Founder, Sabi</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div
            style={{
              fontSize: 86,
              lineHeight: 0.98,
              letterSpacing: 0,
              fontWeight: 500,
            }}
          >
            Voice AI that teaches Nigerian children to read on any phone.
          </div>
          <div
            style={{
              marginTop: 34,
              display: "flex",
              gap: 18,
              fontSize: 26,
              color: "#b64b2f",
            }}
          >
            <span>zero internet</span>
            <span>·</span>
            <span>zero smartphone</span>
            <span>·</span>
            <span>zero data cost</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #dfe4df",
            paddingTop: 28,
            fontSize: 24,
            color: "#60676b",
          }}
        >
          <span>MIT Sloan 2nd · UNICEF AI Ventures · Wesleyan NVA Grand Prize</span>
          <span>naomiivie.vercel.app</span>
        </div>
      </div>
    ),
    size,
  );
}
