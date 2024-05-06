import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 100;

const SwipeButton = () => {
  const pan = React.useRef(new Animated.ValueXY()).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        // Restricting movement to horizontal direction only
        Animated.event([null, { dx: pan.x }])(event, gestureState);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          console.log("Swipe gesture detected! Powering off...");
          // Implement logic for powering off here
          // For now, let's just reset the position of the swipe button
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        } else {
          // Snap back to the original position if not swiped enough
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.button,
          {
            transform: [{ translateX: pan.x }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.text}>Swipe this</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FFFFFF",
    width: width - 20,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default SwipeButton;
