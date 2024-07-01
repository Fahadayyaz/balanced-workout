import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  StatusBar,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Gender = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState(null);
  const [isBackPressed, setIsBackPressed] = useState(false);
  const [isNextPressed, setIsNextPressed] = useState(false);

  const handlePress = useCallback((selectedGender) => {
    setGender(selectedGender);
  }, []);

  const handleBackPress = useCallback(() => {
    setIsBackPressed(true);
    setIsNextPressed(false);
    navigation.goBack();
  }, [navigation]);

  const handleNextPress = useCallback(() => {
    setIsNextPressed(true);
    setIsBackPressed(false);
    navigation.navigate("Age");
  }, [navigation]);

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

        <View style={styles.navButtonsContainer}>
          <Pressable
            onPress={handleBackPress}
            style={({ pressed }) => [
              styles.navButton,
              {
                backgroundColor:
                  pressed || isBackPressed ? "#BDFE30" : "#91929F",
              },
            ]}
          >
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color={isBackPressed ? "black" : "#fff"}
            />
            <Text
              style={[
                styles.buttonText,
                { color: isBackPressed ? "black" : "#fff" },
              ]}
            >
              Back
            </Text>
          </Pressable>
          <Pressable
            onPress={handleNextPress}
            style={({ pressed }) => [
              styles.navButton,
              styles.nextButton, // Add specific style for Next button
              {
                backgroundColor:
                  pressed || isNextPressed ? "#BDFE30" : "#91929F",
              },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                { color: isNextPressed ? "black" : "#fff" },
              ]}
            >
              Next
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={isNextPressed ? "black" : "#fff"}
            />
          </Pressable>
        </View>
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
    alignItems: "center", // Align the buttons in the center
  },
  genderButton: {
    width: "35%",
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // Add margin bottom to create space between the buttons
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  navButtonsContainer: {
    position: "absolute",
    bottom: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20, // Add horizontal padding to create space
  },
  navButton: {
    flexDirection: "row",
    borderRadius: 50,
    width: 140,
    height: 59,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10, // Add horizontal margin to each button
  },
  nextButton: {
    alignSelf: "flex-end", // Align Next button to the right side
  },
  buttonText: {
    color: "#fff",
    paddingTop: 5, // Add padding top to separate text from icon
    textAlign: "center",
  },
});

export default Gender;
