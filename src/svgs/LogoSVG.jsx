import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoSVG(props) {
  return (
    <Svg
      width={66}
      height={66}
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M38.82 52.74v6.496H26.753V27.192h5.306V20.43h-12.04v18.799H6.754V27.192h6.508V20.43H6.269A6.279 6.279 0 000 26.695V39.74a6.273 6.273 0 006.27 6.266h13.747v13.739A6.272 6.272 0 0026.282 66h13.02a6.278 6.278 0 006.27-6.266v-6.995H38.82z"
        fill="#1C2A3A"
      />
      <Path
        d="M59.73 20H45.986V6.269A6.276 6.276 0 0039.715 0h-13.02a6.278 6.278 0 00-6.266 6.269v6.989h6.735v-6.52h12.058v32.067h-5.29v6.766h12.053V26.75h13.264v12.055h-6.513v6.766h6.995A6.278 6.278 0 0066 39.303V26.268A6.276 6.276 0 0059.73 20z"
        fill="#1C2A3A"
      />
    </Svg>
  )
}

export default LogoSVG
