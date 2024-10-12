import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function LabSVG(props) {
  return (
    <Svg
      width={63}
      height={62}
      viewBox="0 0 63 62"
      fill="none"
     
      {...props}
    >
      <G clipPath="url(#clip0_2_3389)">
        <Rect x={0.666504} width={62} height={62} rx={8} fill="#DEB6B5" />
        <Path
          d="M35.562 24.121v-4.785h-7.784v4.785a11.42 11.42 0 107.79 0h-.006z"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M42.659 37.112l-1.828-1.477a2.91 2.91 0 00-3.658 0 2.914 2.914 0 01-3.66 0 2.91 2.91 0 00-3.657 0 2.91 2.91 0 01-3.657 0 2.911 2.911 0 00-3.657 0l-1.833 1.477M36.58 15.722h-9.828v3.614h9.828v-3.614z"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M34.666 0a33.999 33.999 0 01-34 34V0h34z"
          fill="#fff"
          fillOpacity={0.2}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_3389">
          <Rect x={0.666504} width={62} height={62} rx={8} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LabSVG
