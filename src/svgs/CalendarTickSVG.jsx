import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function CalendarTickSVG(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={60} height={60} rx={30} fill="#DEF7E5" />
      <Path
        d="M26 20v3M34 20v3M21.5 27.09h17M40 37c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0136 41c-1.01 0-1.93-.37-2.63-1-.31-.26-.58-.58-.79-.94A3.92 3.92 0 0132 37c0-2.21 1.79-4 4-4 1.2 0 2.27.53 3 1.36A4 4 0 0140 37z"
        stroke="#014737"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M34.44 37l.99.99 2.13-1.97"
        stroke="#014737"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M39 26.5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H26c-3.5 0-5-2-5-5v-8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
        stroke="#014737"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M29.995 31.7h.01M26.294 31.7h.01M26.294 34.7h.01"
        stroke="#014737"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CalendarTickSVG
