import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const TabNav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    borderRadius: 40,
    backgroundColor: "#3A3A3C",
    padding: 10,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

export default TabNav;
