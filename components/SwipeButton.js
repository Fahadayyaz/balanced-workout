import { Animated, Dimensions, PanResponder, Text } from "react-native";
import { memo, useRef } from "react";

import { LinearGradient } from "expo-linear-gradient";

const { width: windowWidth } = Dimensions.get("window");

const SWIPE_THRESHOLD = 100;

const SwipeButton = ({ callback }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        pan.setValue({ x: gestureState.dx, y: 0 });
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          callback();

          Animated.spring(pan, {
            toValue: { x: windowWidth * 0.9 - 60, y: 0 },
            useNativeDriver: false,
          }).start();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <LinearGradient
      colors={["transparent", "#ffffffa0"]}
      start={{ x: 0.9, y: 0 }}
      end={{ x: 0.9, y: 0 }}
      style={{
        marginTop: 40,
        marginLeft: 20,
        width: windowWidth * 0.9,
        height: 60,
        borderRadius: 50,
        borderWidth: 1,
        padding: 5,
      }}
    >
      <Animated.View
        style={[{ transform: [{ translateX: pan.x }] }]}
        {...panResponder.panHandlers}
      >
        <LinearGradient
          colors={["#ffffff", "transparent"]}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        >
          <Text style={{ color: "#ffffff" }}>{">"}</Text>
        </LinearGradient>
      </Animated.View>
    </LinearGradient>
  );
};

export default memo(SwipeButton);
