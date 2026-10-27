import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const title = new URL(request.url).searchParams.get("title")?.slice(0, 140) || "JK Advisory";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F3D2E",
          color: "#F7F5EF",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 28 }}>JK Advisory · Coimbatore</div>
        <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 980 }}>{title}</div>
        <div style={{ fontSize: 24 }}>Dr. Gokulanathan A. · Agri-biologicals</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
