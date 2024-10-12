import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarSVG(props) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
     
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.913.586c-.482.025-.96.403-1.33 1.133L5.177 4.528c-.19.388-.697.766-1.125.836l-2.54.418c-1.623.28-2.002 1.454-.836 2.62l1.981 1.981c.33.329.518.976.429 1.454l-.568 2.45c-.448 1.932.588 2.68 2.29 1.673l2.38-1.414c.2-.12.46-.184.724-.193V.586zM7.914 14.354c.306-.01.62.055.85.194l2.38 1.414c1.702 1.015 2.738.259 2.29-1.673l-.568-2.45c-.11-.468.08-1.116.409-1.444l1.982-1.982c1.165-1.175.786-2.35-.837-2.62l-2.54-.418c-.428-.08-.936-.448-1.125-.836L9.351 1.73C8.954.94 8.43.56 7.914.588v13.766z"
        fill={props.fill?props.fill:"#FEB052"}
      />
    </Svg>
  )
}

export default StarSVG
