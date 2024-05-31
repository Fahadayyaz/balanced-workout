import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TabNav = () => {
  const [pressedIcon, setPressedIcon] = useState(null);
  const navigation = useNavigation();

  const handlePress = (icon) => {
    setPressedIcon(icon);
    // Navigate to respective screens based on the icon
    switch (icon) {
      case "home":
        navigation.navigate("Home");
        break;
      case "workout":
        navigation.navigate("Workout");
        break;
      case "profile":
        navigation.navigate("Profile");
        break;
      case "explore":
        navigation.navigate("Explore");
        break;
      case "settings":
        navigation.navigate("Settings");
        break;
      default:
        break;
    }
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
        onPress={() => handlePress("home")}
        style={[styles.iconContainer, getIconStyle("home")]}
      >
        <Image
          source={require("../assets/TabNavAssets/homeIcon.png")}
          style={getImageStyle("home")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("workout")}
        style={[styles.iconContainer, getIconStyle("workout")]}
      >
        <Image
          source={require("../assets/TabNavAssets/workoutIcon.png")}
          style={getImageStyle("workout")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("profile")}
        style={[styles.iconContainer, getIconStyle("profile")]}
      >
        <Image
          source={require("../assets/TabNavAssets/profileIcon.png")}
          style={getImageStyle("profile")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("explore")}
        style={[styles.iconContainer, getIconStyle("explore")]}
      >
        <Image
          source={require("../assets/TabNavAssets/exploreIcon.png")}
          style={getImageStyle("explore")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("settings")}
        style={[styles.iconContainer, getIconStyle("settings")]}
      >
        <Image
          source={require("../assets/TabNavAssets/settingsIcon.png")}
          style={getImageStyle("settings")}
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
});

export default TabNav;
