import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Challenges() {
  return (
    <View style={{ flex: 1, backgroundColor: "grey" }}>
      <StatusBar barStyle="auto" />
      <View style={styles.header}>
        <View style={styles.backArrowCircle}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={24}
            color="#fff"
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
    alignItems: "center", // Added to align items vertically in the header
    paddingHorizontal: 16, // Added padding for spacing
    marginTop: 16, // Adjusted marginTop for spacing
  },
  challengesHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 12, // Added marginLeft for spacing between icon and text
    color: "#000", // Added text color
  },
  backArrowCircle: {
    width: 53,
    height: 53,
    backgroundColor: "#2E2E2E",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
