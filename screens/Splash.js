import { Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to Splash1.js after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace("Splash1");
    }, 3000);

    // Clear the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splashAssets/splashIcon.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Splash;
