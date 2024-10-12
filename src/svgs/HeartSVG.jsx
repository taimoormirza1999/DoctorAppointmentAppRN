import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function HeartSVG(props) {
  return (
    <Svg
      width={63}
      height={62}
      viewBox="0 0 63 62"
      fill="none"
     
      {...props}
    >
      <G clipPath="url(#clip0_2_3326)">
        <Rect x={0.333496} width={62} height={62} rx={8} fill="#93C19E" />
        <Path
          d="M34 0A33.999 33.999 0 010 34V0h34z"
          fill="#fff"
          fillOpacity={0.2}
        />
        <G
          clipPath="url(#clip1_2_3326)"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M14.308 32.126H24.57l2.997-7.873 3.865 13.425 4.317-9.328 2.732 3.92h9.923" />
          <Path d="M46.572 28.926c.776-1.579 1.063-3.029 1.063-4.317 0-2.779-2.007-8.528-8.527-8.528s-8.158 5.588-8.158 5.588-1.638-5.583-8.158-5.583-8.528 5.753-8.528 8.528c0 1.245.268 2.642.988 4.16M20.993 35.941c3.907 4.137 7.908 8.076 9.957 9.978 2.047-1.9 6.046-5.835 9.947-9.967" />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_2_3326">
          <Rect x={0.333496} width={62} height={62} rx={8} fill="#fff" />
        </ClipPath>
        <ClipPath id="clip1_2_3326">
          <Path
            fill="#fff"
            transform="translate(13.667 15.483)"
            d="M0 0H35.3333V31.0329H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HeartSVG
