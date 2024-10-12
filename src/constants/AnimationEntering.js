import React from 'react';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const AnimatedWrapper = ({ children, style, onPress  }) => {
  return (
    <Animated.View
      entering={FadeInDown.springify()
        .damping(50)
        .mass(1)
        .stiffness(50)
        .overshootClamping(false)
        .restDisplacementThreshold(0.1)
        .restSpeedThreshold(5)}
      exiting={FadeInUp.springify()
        .damping(50)
        .mass(1)
        .stiffness(50)
        .overshootClamping(false)
        .restDisplacementThreshold(0.1)
        .restSpeedThreshold(5)}
        style={style}
    >
      {children}
    </Animated.View>
  );
};

export  {AnimatedWrapper};
