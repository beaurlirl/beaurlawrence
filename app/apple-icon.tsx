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
              'radial-gradient(at 30% 30%, rgb(255,255,255) 0%, rgb(212,212,216) 35%, rgb(161,161,170) 60%, rgb(113,113,122) 85%, rgb(24,24,27) 100%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
