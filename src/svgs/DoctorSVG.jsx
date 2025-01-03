import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DoctorSVG(props) {
  return (
    <Svg
      width={19}
      height={22}
      viewBox="0 0 19 22"
      fill="none"
     
      {...props}
    >
      <G
        clipPath="url(#clip0_238_2462)"
         stroke={props.stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M3.517 11.16C1.847 9.036.36 6.998.36 4.115.36 2.14 2.1 1.45 3.2 1.21M4.941 1.086c0 .41-.385.742-.861.742-.416 0-.763-.255-.844-.593a.662.662 0 01-.017-.149c0-.41.385-.742.86-.742.476 0 .862.332.862.742zM11.22 1.086c0 .41.384.742.86.742.416 0 .764-.255.844-.593a.66.66 0 00.017-.149c0-.41-.385-.742-.861-.742s-.86.332-.86.742zM12.644 11.16C14.312 9.037 15.799 7 15.799 4.116c0-1.966-1.726-2.659-2.827-2.902M.36 4.115C.36 2.14 2.103 1.45 3.203 1.21" />
        <Path d="M12.658 11.17a.948.948 0 00-1.29.126A26.292 26.292 0 018.08 14.51a26.334 26.334 0 01-3.289-3.215.903.903 0 00-.273-.236.946.946 0 00-.717-.088.934.934 0 00-.327.162.885.885 0 00-.233.273.844.844 0 00.128.99c2.022 2.375 4.069 3.875 4.155 3.937l.011.007a.958.958 0 00.109.066l.009.005c.082.041.17.07.262.087l.026.004c.045.006.09.01.135.01h.004c.045 0 .09-.003.135-.01l.027-.005a.963.963 0 00.262-.086l.009-.005a.958.958 0 00.108-.066l.011-.007a26.78 26.78 0 004.155-3.937.847.847 0 00-.13-1.226zM16.428 17.718s-.528 3.936-4.062 3.936c-3.244 0-4.116-2.33-4.257-5.136M18.64 16.087c0 .89-.786 1.61-1.762 1.61-.977 0-1.76-.718-1.76-1.61 0-.893.789-1.611 1.762-1.611.974 0 1.76.72 1.76 1.61z" />
        <Path d="M17.109 16.087a.213.213 0 01-.034.125.23.23 0 01-.102.086.242.242 0 01-.256-.042.219.219 0 01-.066-.114.211.211 0 01.011-.129.224.224 0 01.086-.1.24.24 0 01.13-.038.234.234 0 01.161.06.218.218 0 01.07.152z" />
      </G>
      <Defs>
        <ClipPath id="clip0_238_2462">
          <Path fill="#fff" d="M0 0H19V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DoctorSVG
