const lightShadow={
    elevation: 4, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 2, 
  }
const cardShadow={
  elevation: 4, // Android shadow
  shadowColor: "#000", // iOS shadow color
  shadowOffset: { width: 0, height: 2 }, // A more subtle iOS shadow offset
  shadowOpacity: 0.1, // Reduced opacity for a smoother look
  shadowRadius: 4, 
  }

  // Medium shadow
  const mediumShadow= {
    elevation: 8, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.15, 
    shadowRadius: 3.5, 
  }

  
  const heavyShadow= {
    elevation: 12, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 6 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 5, 
  }


  export { lightShadow, mediumShadow, heavyShadow,cardShadow };