import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TabNav = ({ activeScreen }) => {
  const [pressedIcon, setPressedIcon] = useState(activeScreen);
  const navigation = useNavigation();

  const handlePress = (icon) => {
    setPressedIcon(icon);
    // Navigate to respective screens based on the icon
    navigation.navigate(icon);
  };

  const getIconStyle = (icon) => ({
    backgroundColor: pressedIcon === icon ? "#BDFE30" : "#4A4A4A",
  });

  const getImageStyle = (icon) => ({
    tintColor: pressedIcon === icon ? "black" : null,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handlePress("Home")}
        style={[styles.iconContainer, getIconStyle("Home")]}
      >
        <Image
          source={require("../assets/TabNavAssets/homeIcon.png")}
          style={getImageStyle("Home")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("Workout")}
        style={[styles.iconContainer, getIconStyle("Workout")]}
      >
        <Image
          source={require("../assets/TabNavAssets/workoutIcon.png")}
          style={getImageStyle("Workout")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("Profile")}
        style={[
          styles.iconContainer,
          getIconStyle("Profile"),
          styles.profileIconContainer, // Additional style for Profile icon
        ]}
      >
        <Image
          source={require("../assets/TabNavAssets/profileIcon.png")}
          style={getImageStyle("Profile")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("Explore")}
        style={[styles.iconContainer, getIconStyle("Explore")]}
      >
        <Image
          source={require("../assets/TabNavAssets/exploreIcon.png")}
          style={getImageStyle("Explore")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("Settings")}
        style={[styles.iconContainer, getIconStyle("Settings")]}
      >
        <Image
          source={require("../assets/TabNavAssets/settingsIcon.png")}
          style={getImageStyle("Settings")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 59,
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
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profileIconContainer: {
    marginBottom: 40,
    backgroundColor: "#1E1E1E", // Adjust this value to move the icon upward
  },
});

export default TabNav;
