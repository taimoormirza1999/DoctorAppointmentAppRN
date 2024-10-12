import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function GeneralSVG(props) {
  return (
    <Svg
      width={62}
      height={62}
      viewBox="0 0 62 62"
      fill="none"
     
      {...props}
    >
      <G clipPath="url(#clip0_2_3347)">
        <Rect width={62} height={62} rx={8} fill="#ACA1CD" />
        <Path
          d="M34 0A33.999 33.999 0 010 34V0h34z"
          fill="#fff"
          fillOpacity={0.2}
        />
        <G
          clipPath="url(#clip1_2_3347)"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M22.295 31.244c-2.428-3.24-4.591-6.347-4.591-10.744 0-3.01 2.533-4.064 4.133-4.429M24.368 15.88c0 .626-.56 1.132-1.253 1.132-.606 0-1.11-.388-1.228-.904a1.057 1.057 0 01-.025-.227c0-.626.56-1.132 1.253-1.132.691 0 1.253.506 1.253 1.132zM33.501 15.88c0 .626.56 1.132 1.252 1.132.606 0 1.111-.388 1.228-.904.017-.074.025-.15.025-.227 0-.626-.56-1.132-1.253-1.132-.693 0-1.252.506-1.252 1.132zM35.574 31.245c2.427-3.24 4.591-6.347 4.591-10.745 0-2.998-2.512-4.055-4.113-4.425M17.704 20.5c0-3.01 2.533-4.064 4.133-4.429" />
          <Path d="M35.594 31.26a1.334 1.334 0 00-1.876.191 39.168 39.168 0 01-4.783 4.903 39.23 39.23 0 01-4.785-4.903 1.332 1.332 0 00-1.917-.246 1.334 1.334 0 00-.152 1.926c2.94 3.621 5.919 5.909 6.044 6.004l.017.01c.05.038.103.071.158.101l.012.008c.12.063.249.107.381.132l.04.006c.064.01.13.016.196.016h.005c.066 0 .132-.006.197-.016l.039-.007c.133-.024.261-.068.381-.131l.013-.008c.055-.03.107-.063.158-.1l.016-.011a39.789 39.789 0 006.045-6.004 1.334 1.334 0 00-.19-1.87zM41.08 41.245s-.769 6.003-5.91 6.003c-4.72 0-5.988-3.552-6.193-7.833M44.298 38.758c0 1.356-1.144 2.456-2.565 2.456-1.42 0-2.56-1.096-2.56-2.456 0-1.361 1.148-2.457 2.564-2.457 1.416 0 2.56 1.1 2.56 2.456z" />
          <Path d="M42.07 38.758a.337.337 0 11-.337-.324.33.33 0 01.337.324z" />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_2_3347">
          <Rect width={62} height={62} rx={8} fill="#fff" />
        </ClipPath>
        <ClipPath id="clip1_2_3347">
          <Path
            fill="#fff"
            transform="translate(17.179 14.225)"
            d="M0 0H27.6426V33.551H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GeneralSVG