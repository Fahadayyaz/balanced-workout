import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import BackNextButtons from "../components/BackNextButtons";

const Gender = () => {
  const [gender, setGender] = useState(null);

  const handlePress = useCallback((selectedGender) => {
    setGender(selectedGender);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/signInSignUpAssets/editProfileBg.png")}
        style={styles.imageBackground}
      >
        <Text style={styles.heading}>Tell Us About Yourself</Text>
        <Text style={styles.description}>
          To give you a better experience we need to know your gender
        </Text>

        <View style={styles.genderContainer}>
          <Pressable
            onPress={() => handlePress("male")}
            style={({ pressed }) => [
              styles.genderButton,
              {
                backgroundColor:
                  pressed || gender === "male" ? "#BDFE30" : "#91929F",
              },
            ]}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="male"
                size={32}
                color={gender === "male" ? "black" : "#fff"}
              />
              <Text
                style={[
                  styles.buttonText,
                  { color: gender === "male" ? "black" : "#fff" },
                ]}
              >
                Male
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => handlePress("female")}
            style={({ pressed }) => [
              styles.genderButton,
              {
                backgroundColor:
                  pressed || gender === "female" ? "#BDFE30" : "#91929F",
              },
            ]}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="female"
                size={32}
                color={gender === "female" ? "black" : "#fff"}
              />
              <Text
                style={[
                  styles.buttonText,
                  { color: gender === "female" ? "black" : "#fff" },
                ]}
              >
                Female
              </Text>
            </View>
          </Pressable>
        </View>

        <BackNextButtons nextPath="Age" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    paddingHorizontal: "10%",
    paddingVertical: "10%",
  },
  heading: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginTop: "20%",
  },
  description: {
    color: "#D4D4D4",
    textAlign: "center",
    marginTop: "2%",
  },
  genderContainer: {
    marginTop: "40%",
    alignItems: "center",
  },
  genderButton: {
    width: "35%",
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    paddingTop: 5,
    textAlign: "center",
  },
});

export default Gender;
