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
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/signInSignUpAssets/editProfileBg.png")}
        style={styles.imageBackground}
      >
        <Text style={styles.heading}>Tell Us About Yourself</Text>
        <Text style={styles.description}>
          To give you a better experience we need to know your gender
        </Text>

        <Pressable
          onPress={() => handlePress("male")}
          style={({ pressed }) => [
            styles.genderMaleButton,
            {
              backgroundColor:
                pressed || gender === "male" ? "#BDFE30" : "#91929F",
            },
          ]}
        >
          <View>
            <MaterialIcons
              name="male"
              size={32}
              color={gender === "male" ? "black" : "#fff"}
            />
            <Text style={[styles.buttonText, { color: gender === "male" ? "black" : "#fff" }]}>Male</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => handlePress("female")}
          style={({ pressed }) => [
            styles.genderFemaleButton,
            {
              backgroundColor:
                pressed || gender === "female" ? "#BDFE30" : "#91929F",
            },
          ]}
        >
          <View>
            <MaterialIcons
              name="female"
              size={32}
              color={gender === "female" ? "black" : "#fff"}
            />
            <Text style={[styles.buttonText, { color: gender === "female" ? "black" : "#fff" }]}>Female</Text>
          </View>
        </Pressable>

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
            <Text style={[styles.buttonText, { color: isBackPressed ? "black" : "#fff" }]}>Back</Text>
          </Pressable>
          <Pressable
            onPress={handleNextPress}
            style={({ pressed }) => [
              styles.navButton,
              {
                backgroundColor:
                  pressed || isNextPressed ? "#BDFE30" : "#91929F",
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: isNextPressed ? "black" : "#fff" }]}>Next</Text>
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
  genderMaleButton: {
    width: "35%",
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "40%",
  },
  genderFemaleButton: {
    width: "35%",
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "20%",
  },
  navButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "1%",
  },
  navButton: {
    flexDirection: "row",
    padding: "3%",
    borderRadius: 50,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 5,
  },
});

export default Gender;
