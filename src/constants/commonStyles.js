import {scale} from 'react-native-size-matters';
import {
  buttonPadding,
  fontSizes,
  height,
  inputPadding,
  width,
} from './DimensionFontSizes';
import {current} from '@reduxjs/toolkit';
// Colors

export const primaryGratyColor = '#EDEDED';
export const BoldFont = 'OpenSans-Bold';
export const SemiBoldFont = 'OpenSans-SemiBold';

export const HeaderTopMargin = 15;
export const relative = {position: 'relative'};
export const absolute = {position: 'absolute'};
export const w100={
 width:'100%'
}
export const w70={
 width:'70%'
}
export const w80={
 width:'80%'
}
export const sectionSeprator={
 marginVertical:scale(10)
 }
export const headingCommonStyle={
    marginTop: '5@s',
    marginBottom: '16@s'
 }
export const FixedButtonBackground={
  backgroundColor:'rgba(255,255,255,0.8)', paddingVertical:scale(15)
 }
export const headings = {
  h1: {
    fontSize:scale(14.5),
    fontWeight: '700',
    fontFamily:'Inter_18pt-Bold',
  },
  h2: {
    fontSize: scale(14.5),
    fontWeight: '700',
    lineHeight: scale(20),
    fontFamily:'Inter_18pt-Bold',
  },
  h3: {
    fontSize: scale(12.5),
    fontWeight: '600',
    lineHeight: scale(15),
    fontFamily:'Inter_18pt-Medium',
  },
};
export const body = {
  bodyXL: {
    fontSize: '14.5@s',
    fontWeight: '800',
    lineHeight: '145%',
  },
  bodyLG: {
    fontSize: '13.5@s',
    fontWeight: '700',
    lineHeight: '145%',
  },
  bodySBold: {
    fontSize: '12.5@s',
    fontWeight: '800',
    lineHeight: '145%',
  },
  bodySSemiBold: {
    fontSize: scale(11),
    fontWeight: '700',
    lineHeight: scale(18),
    fontFamily:'Inter_18pt-SemiBold',
  },
  bodySMedium: {
    fontSize: scale(11),
    fontWeight: '700',
    lineHeight: '145%',
    fontFamily:'Inter_18pt-Medium',
  },
  bodySRegular: {
    fontSize: scale(12.5),
    fontFamily:'Inter_18pt-Regular',
    lineHeight: '145%',
  },
  bodyXSBold: {
    fontSize: '12.5@s',
    fontWeight: '800',
    lineHeight: '145%',
  },
  bodyXSSemiBold: {
    fontSize: scale(11),
    fontWeight: '800',
    lineHeight: '145%',
    fontFamily:'Inter_18pt-SemiBold',
    },
  bodyXSMedium: {
    fontSize: '12.5@s',
    fontWeight: '800',
    lineHeight: '145%',
  },
  bodyXSRegular: {
    fontSize: scale(11),
    fontWeight: '400',
    lineHeight: '145%',
    fontFamily:'Inter_18pt-Regular'
    },
};
// Other Styles
// const pageHeader={
//     paddingBottom: 8,
//     justifyContent: 'center',
//     width: '100%',
//     alignItems: 'center',
//     textAlign: 'center',
//     justifyContent: 'center',
//   }
//   const buttonStyles={
//     paddingVertical: buttonPadding.Vertical,
//     borderRadius: 4,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 15,
//     width: "100%",
//   }
//   const buttonTextStyles= {
//     color: 'white',
//     fontFamily: 'OpenSans-Bold',
//     fontSize: fontSizes.small,
//     fontWeight: 'bold',
//   }
// const inputStyle={
//   paddingVertical:inputPadding.Vertical,
//   height:height * 0.065,
//   backgroundColor: 'white',
//   fontSize:fontSizes.small,
//   fontFamily: 'OpenSans-Regular',
//   width: '100%',
// }
// const modalText={
//   textAlign: 'justify',
//   fontFamily: 'OpenSans-Regular',
//   fontSize: fontSizes.small,
//   marginBottom: 10,
// }
// const modalHeading={
//   marginTop: 20,
//   textAlign: 'left',
//   fontFamily: 'OpenSans-Bold',
//   lineHeight: 24,
//   fontSize: fontSizes.large,
//   fontWeight: 'bold',
//   paddingBottom: 12,
// }
// //Modal
// const modalCenteredView={
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor: "rgba(0,0,0,0.5)",
// }
// const modalInnerView= {
//   flexDirection: "row",
//   width: "90%",
//   justifyContent: "space-between",
//   borderTopColor: "#0093FF",
//   borderTopWidth: height * 0.02,
//   backgroundColor: "white",
//   borderRadius: 20,
//   paddingHorizontal: width * 0.05,
//   paddingBottom: 30,
//   paddingTop: width*0.08,
// }

// const modalIcon=(currentLanguage,value) =>{
//   return { position: "absolute", top: 10,right:currentLanguage=="en"?value:null , left:currentLanguage=="ar"?value:null } }
// //Modal End

// const starikStyle= {
//   color: '#FF2116',
//   fontSize: fontSizes.large,
//   marginTop: 7,
//   marginLeft: 2,
// }
// const labelStyle= {
//   fontSize: fontSizes.small,
//   fontFamily: 'OpenSans-SemiBold',
//   letterSpacing: -0.09,
//   fontWeight: '600',
// }
// const disableInputStyle={
//   borderRadius: 4,
//   borderWidth: 0.8,
//   borderColor: 'gray',
//   fontFamily: 'OpenSans-Regular',
//   fontSizes:fontSizes.small,
// }
// const sectionHeading= {
//   marginVertical: 7,
//   paddingVertical: height * 0.02,
//   paddingHorizontal: 13,
//   borderRadius: 5,
// }
// const sectionHeadingText= {
//   fontFamily: "OpenSan-Bold",
//   color: "white",
//   fontWeight: "bold",
//   fontSize: fontSizes.medium,
// }
// const section= {
//   marginVertical: 0,
//   paddingBottom: 0,
//   elevation: 0.5,
// }
export const TestingHighLighter = {
  borderColor: 'red',
  borderWidth: 3,
};
export const SplashCardStyles = {
  flex: 1,
  borderRadius: width * 0.03,
};
export const AlignSelf = {
  alignSelf: 'center',
};
export const VerticalHorizontalCenter = {
  justifyContent: 'center',
  alignItems: 'center',
};
export const justRow = {
  flexDirection: 'row',
};
export const absolutePosWValue = (position, value) => {
  return {
    position: 'absolute',
    top: position == 'top' ? scale(value) : null,
    right: position == 'right' ? scale(value) : null,
    left: position == 'left' ? scale(value) : null,
    bottom: position == 'bottom' ? scale(value) : null,
  };
};
export const absolutePosWJustValue = (position, value) => {
  return {
    top: position == 'top' ? scale(value) : null,
    right: position == 'right' ? scale(value) : null,
    left: position == 'left' ? scale(value) : null,
    bottom: position == 'bottom' ? scale(value) : null,
  }
};
// //Modal End

// const modalCommonStyle=(color)=> {
//   return {
//   width: "90%",
//   justifyContent: "space-between",
//   borderTopColor: color,
//   borderTopWidth: height * 0.02,
//   backgroundColor: "white",
//   borderRadius: 20,
//   paddingHorizontal: width * 0.05,
//   }
// }
// const cardCompoDynamicPadding=(currentLanguage,value)=>{
//   return {paddingLeft: currentLanguage=='en'&&value, paddingRight: currentLanguage=='ar'&&value }
// }
// const rowDirectionDynamic=(currentLanguage) =>{
//   return {flexDirection: currentLanguage=='ar' ? "row-reverse" : "row"}
// }
// const marginLeftRightDynamic=(currentLanguage, value) =>{
//   return { marginLeft: currentLanguage == "en" && value,
//     marginRight: currentLanguage == "ar" && value,}
// }
// const paddingLeftRightDynamic=(currentLanguage, value) =>{
//   return { paddingLeft: currentLanguage == "en" && value,
//     paddingRight: currentLanguage == "ar" && value,}
// }
// const forcefullyRowDirectionDynamic=(currentLanguage, paddingValue) =>{
//   return {alignSelf:currentLanguage=='en'?'flex-start':'flex-end',
//     ...(paddingValue && {
//     paddingLeft: currentLanguage === 'en' ? paddingValue : null,
//     paddingRight: currentLanguage !== 'en' ? paddingValue : null,
//   })}
// }

// export {buttonStyles,buttonTextStyles,modalCenteredView,modalIcon, modalInnerView,modalHeading,modalText, modalCommonStyle,paddingLeftRightDynamic,marginLeftRightDynamic, section,sectionHeading,sectionHeadingText,pageHeader, inputStyle,starikStyle,labelStyle, disableInputStyle,primaryColor,rowDirectionDynamic,forcefullyRowDirectionDynamic, cardCompoDynamicPadding}
