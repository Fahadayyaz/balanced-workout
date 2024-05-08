import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CustomSwipeButton from "../components/SwipeButton";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Splash2 = () => {
  const navigation = useNavigation();

  const handleSkip = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/splashAssets/splash2.png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TouchableOpacity onPress={handleSkip}>
          <Text
            style={{
              color: "white",
              marginLeft: "auto",
              margin: 27,
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>
            EXPLORE THE WORLD’S WONDERS TODAY WITH US
          </Text>
          <Text style={styles.subHeading}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            facilis odio dolorem ducimus voluptatem a volu
          </Text>
          <CustomSwipeButton callback={() => navigation.navigate("Splash3")} />
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
  heading: {
    color: "#ffffff",
    fontSize: 28,
    marginTop: "128%",
    textAlign: "center",
  },
  subHeading: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
    marginTop: "2%",
    marginLeft: "10.2%",
    marginRight: "10.2%",
  },
});

export default Splash2;
