import { Animated, Dimensions, PanResponder, Text } from "react-native";
import { memo, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width: windowWidth } = Dimensions.get("window");
const BUTTON_WIDTH = 50;
const SWIPE_THRESHOLD = 100;
const MAX_X = windowWidth * 0.9 - BUTTON_WIDTH - 10; // Adjusted for padding and margins

const SwipeButton = ({
  callback = () => {
    console.log("Swipe callback");
  },
}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Restrict movement within bounds
        let newX = Math.max(0, Math.min(MAX_X, gestureState.dx));
        pan.setValue({ x: newX, y: 0 });
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          callback();

          Animated.spring(pan, {
            toValue: { x: MAX_X, y: 0 },
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
          colors={["white", "transparent"]}
          start={{ x: 0.99, y: 0.99 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: BUTTON_WIDTH,
            height: BUTTON_WIDTH,
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <AntDesign
            name="arrowright"
            size={24}
            color="black"
            style={{ alignSelf: "center" }}
          />
        </LinearGradient>
      </Animated.View>
    </LinearGradient>
  );
};

export default memo(SwipeButton);
