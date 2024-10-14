import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function CalendarCancelSVG(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={60} height={60} rx={30} fill="#FDE8E8" />
      <Path
        d="M26 20v3M34 20v3M21.5 27.09h17M36 41a4 4 0 100-8 4 4 0 000 8zM37.07 38.11L34.95 36M37.05 36.02l-2.12 2.12"
        stroke="#771D1D"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M39 26.5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H26c-3.5 0-5-2-5-5v-8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
        stroke="#771D1D"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M29.995 31.7h.01M26.294 31.7h.01M26.294 34.7h.01"
        stroke="#771D1D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CalendarCancelSVG
