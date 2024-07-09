import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Challenges() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.backArrowCircle}
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={24}
            color="black"
          />
        </View>
        <Text style={styles.challengesHeading}>Challenges</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  challengesHeading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  backArrowCircle: {
    width: 53,
    height: 53,
    backgroundColor: "#2E2E2E",
    borderRadius: 100,
  },
});
