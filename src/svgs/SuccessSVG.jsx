import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SuccessSVG(props) {
  return (
    <Svg
      width={131}
      height={131}
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={131} height={131} rx={65.5} fill="#A4CFC3" />
      <Path
        d="M62.38 35.68l-16.5 6.18c-3.15 1.2-5.73 4.92-5.73 8.31v24.3c0 2.43 1.59 5.64 3.54 7.08l16.5 12.33c2.91 2.19 7.68 2.19 10.59 0l16.5-12.33c1.95-1.47 3.54-4.65 3.54-7.08v-24.3c0-3.36-2.58-7.11-5.73-8.28l-16.5-6.18c-1.68-.66-4.5-.66-6.21-.03z"
        fill="#fff"
      />
      <Path
        d="M61.48 72.19c-.57 0-1.14-.21-1.59-.66l-4.83-4.83c-.87-.87-.87-2.31 0-3.18.87-.87 2.31-.87 3.18 0l3.24 3.24 11.31-11.31c.87-.87 2.31-.87 3.18 0 .87.87.87 2.31 0 3.18l-12.9 12.9c-.45.45-1.02.66-1.59.66z"
        fill="#292D32"
      />
    </Svg>
  )
}

export default SuccessSVG
