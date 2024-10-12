import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function LungsSVG(props) {
  return (
    <Svg
      width={63}
      height={62}
      viewBox="0 0 63 62"
      fill="none"
     
      {...props}
    >
      <G clipPath="url(#clip0_2_3335)">
        <Rect x={0.666504} width={62} height={62} rx={8} fill="#F5AD7E" />
        <G
          clipPath="url(#clip1_2_3335)"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M35.368 36.867a6.996 6.996 0 002.7 5.384c.866.675 2 1.26 3.482 1.57 5.267 1.117 7.927.87 7.922-4.805 0-3.904-.787-17.973-9.908-19.194-3.792-.509-4.515 2.565-4.477 4.311l.281 12.734zM27.965 36.867a7 7 0 01-2.696 5.384c-.866.675-2 1.26-3.481 1.57-5.268 1.117-7.928.87-7.922-4.805 0-3.904.787-17.973 9.908-19.194 3.793-.509 4.515 2.565 4.477 4.311l-.286 12.734zM32.763 17.651v6.67c0 1.134.674 2.196 1.8 2.841l.427.244M30.57 17.651v6.67c0 1.134-.674 2.196-1.8 2.841l-.427.244M31.667 28.318c-1.242 1.114-3.356 1.73-3.356 1.73M31.666 28.318c1.24 1.114 3.355 1.73 3.355 1.73" />
        </G>
        <Path
          d="M34.666 0a33.999 33.999 0 01-34 34V0h34z"
          fill="#fff"
          fillOpacity={0.2}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_3335">
          <Rect x={0.666504} width={62} height={62} rx={8} fill="#fff" />
        </ClipPath>
        <ClipPath id="clip1_2_3335">
          <Path
            fill="#fff"
            transform="translate(13.367 17.155)"
            d="M0 0H36.6V27.6894H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LungsSVG
