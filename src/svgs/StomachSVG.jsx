import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function StomachSVG(props) {
  return (
    <Svg
      width={63}
      height={62}
      viewBox="0 0 63 62"
      fill="none"
     
      {...props}
    >
      <G clipPath="url(#clip0_2_3382)">
        <Rect x={0.333496} width={62} height={62} rx={8} fill="#352261" />
        <G clipPath="url(#clip1_2_3382)">
          <Path
            d="M20.996 44.962c-.785.223-1.61.108-2.121-.322-.866-.729-1.678-1.864-2.162-3.557-.664-2.319.162-6.967 4.043-8.078 2.92-.835 4.111 1.181 7.047.341 2.937-.84 4.52-2.74 3.991-4.58-.936-3.271-6.326-4.13-8.796-7.806-.65-.973-.059-1.655 1.383-2.072.98-.28 1.968-.733 2.702-.07.735.665 1.544 1.425 2.848 2.245 0 0 1.85-3.062 4.784-3.902 2.934-.84 8.935.299 11.095 7.855 2.161 7.555-6.257 13.423-11.29 14.864-8.541 2.443-9.968-2.547-12.263-1.89-1.777.508-1.131 2.594.246 4.167.807.922.128 2.336-1.363 2.76l-.144.044z"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Path
          d="M34 0A33.999 33.999 0 010 34V0h34z"
          fill="#fff"
          fillOpacity={0.2}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_3382">
          <Rect x={0.333496} width={62} height={62} rx={8} fill="#fff" />
        </ClipPath>
        <ClipPath id="clip1_2_3382">
          <Path
            fill="#fff"
            transform="translate(15.944 16.365)"
            d="M0 0H30.7796V29.27H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default StomachSVG
