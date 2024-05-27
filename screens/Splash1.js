import React from "react";
import { ImageBackground, StyleSheet, Text, Pressable, View } from "react-native";
import CustomSwipeButton from "../components/SwipeButton";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Splash1 = () => {
  const navigation = useNavigation();

  const handleSkip = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/splashAssets/splash1.png")}
        style={styles.imageBackground}
      >
        <Pressable onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>

        <View style={styles.contentContainer}>
          <Text style={styles.heading}>
            EXPLORE THE WORLD’S WONDERS TODAY WITH US
          </Text>
          <Text style={styles.subHeading}>
            Start your adventure with us! Discover unforgettable destinations and
            hidden gems
          </Text>
          <CustomSwipeButton callback={() => navigation.replace("Splash2")} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  skipText: {
    color: "white",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  heading: {
    color: "#ffffff",
    fontSize: 28,
    textAlign: "center",
    marginTop:"150%",
  },
  subHeading: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
    marginTop: "2%",
    marginHorizontal: 20,
  },
});

export default Splash1;
