'use client'

import { useId } from 'react'

interface BorderBeamProps {
  duration?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
}

export function BorderBeam({
  duration = 4,
  colorFrom = '#F97316',
  colorTo = '#091C8C',
  borderWidth = 2,
}: BorderBeamProps) {
  const uid = useId().replace(/:/g, '')

  return (
    <>
      <style>{`
        @keyframes spin-${uid} {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .bb-outer-${uid} {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: ${borderWidth}px;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            ${colorFrom} 60deg,
            ${colorTo} 120deg,
            transparent 180deg,
            transparent 360deg
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 20;
          animation: spin-${uid} ${duration}s linear infinite;
        }
      `}</style>
      <div className={`bb-outer-${uid}`} />
    </>
  )
}
