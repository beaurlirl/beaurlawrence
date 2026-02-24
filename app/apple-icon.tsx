import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <div
          style={{
            width: 164,
            height: 164,
            borderRadius: '50%',
            backgroundImage:
              'radial-gradient(at 30% 30%, rgb(255,255,255) 0%, rgb(255,226,122) 35%, rgb(255,79,216) 60%, rgb(74,125,255) 85%, rgb(0,255,208) 100%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
