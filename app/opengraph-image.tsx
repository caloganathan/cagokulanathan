import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "JK Advisory — agri-biologicals consultant in Coimbatore";

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
          background: "#F7F5EF",
          color: "#0E1A14",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#0F3D2E" }}>JK ADVISORY · COIMBATORE</div>
        <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 900 }}>
          From strain to shelf.
        </div>
        <div style={{ fontSize: 28 }}>Dr. Gokulanathan A. · Agri-biologicals</div>
      </div>
    ),
    size,
  );
}
