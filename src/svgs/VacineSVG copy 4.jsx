import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function VacineSVG(props) {
  return (
    <Svg
      width={62}
      height={62}
      viewBox="0 0 62 62"
      fill="none"
     
      {...props}
    >
      <G clipPath="url(#clip0_2_3397)">
        <Rect width={62} height={62} rx={8} fill="#89CCDB" />
        <G
          clipPath="url(#clip1_2_3397)"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M33.389 18.548L17.07 34.866l10.12 10.12L43.51 28.668l-10.12-10.12z" />
          <Path d="M24.485 42.276l-10.527 5.718 5.717-10.527M31.937 17.092l12.944 12.944M41.006 14.006l7.036 7.036M46.626 19.626l-6.077 6.077M36.345 21.5l6.078-6.078M29.448 22.629l3.416 3.414M25.191 26.886l3.415 3.415M20.934 31.144l3.415 3.414" />
        </G>
        <Path
          d="M34 0A33.999 33.999 0 010 34V0h34z"
          fill="#fff"
          fillOpacity={0.2}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_3397">
          <Rect width={62} height={62} rx={8} fill="#fff" />
        </ClipPath>
        <ClipPath id="clip1_2_3397">
          <Path
            fill="#fff"
            transform="translate(13.347 13.395)"
            d="M0 0H35.3067V35.21H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default VacineSVG
