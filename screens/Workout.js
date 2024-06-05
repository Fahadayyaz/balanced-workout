import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Workout = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../assets/workoutAssets/background.png")}
        style={styles.bgImage}
      >
        <View style={styles.header}>
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </View>
          <View style={styles.screenHeading}>
            <Text style={{ color: "#fff", fontSize: 32 }}>Workout</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    position: "absolute",
    top: 40,
    width: "100%",
    alignItems: "center",
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  screenHeading: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default Workout;
