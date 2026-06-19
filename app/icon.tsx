// app/icon.tsx
import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%", // circle avatar — use "20%" for a rounded square
          background: "linear-gradient(135deg, #14B8A6 0%, #0F2A4A 100%)",
          color: "#ffffff",
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: "-1px",
          fontFamily: "sans-serif",
        }}
      >
        RW
      </div>
    ),
    { ...size },
  )
}