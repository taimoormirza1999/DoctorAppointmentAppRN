import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function CalendarEditSVG(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={60} height={60} rx={30} fill="#F3F4F6" />
      <Path
        d="M26 20v3M34 20v3M21.5 27.09h17M37.21 33.77l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01zM36.7 34.28c.3 1.08 1.14 1.92 2.22 2.22M30 40h-4c-3.5 0-5-2-5-5v-8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V30"
        stroke="#1C2A3A"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M29.995 31.7h.01M26.294 31.7h.01M26.294 34.7h.01"
        stroke="#1C2A3A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CalendarEditSVG
