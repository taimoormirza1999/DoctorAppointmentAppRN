export const navigateAfterDelay = (navigation, screenName, delay = 18000) => {
    // delay is in milliseconds, 3 minutes = 180000 ms
    setTimeout(() => {
      navigation.navigate(screenName);
    }, delay);
  };