import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import BackNextButtons from "../components/BackNextButtons";

const Goal = () => {
  const weightData = useMemo(
    () => [
      "Gain Weight",
      "Lose Weight",
      "Get Fitter",
      "Gain more flexible",
      "Learn the basics",
      "Body Building",
    ],
    []
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/signInSignUpAssets/editProfileBg.png")}
        style={styles.bgImage}
      >
        <Text style={styles.heading}>What's Your Goal?</Text>
        <Text style={styles.description}>
          This helps us create your personalized plan
        </Text>
        <View style={styles.pickerContainer}>
          <ScrollPicker
            dataSource={weightData}
            selectedIndex={2}
            renderItem={(data, index) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{data}</Text>
              </View>
            )}
            onValueChange={(data, selectedIndex) => {}}
            wrapperHeight={450}
            itemHeight={80}
            highlightColor="#BDFE30"
            highlightBorderWidth={4}
            wrapperBackground="transparent"
          />
        </View>
        <BackNextButtons nextPath="PhysicalActivity" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    paddingHorizontal: 30,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
  itemText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  pickerContainer: {
    width: "70%",
    height: "50%",
    marginTop: "40%",
    flexWrap: "nowrap",
    alignSelf: "center",
  },
  heading: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginTop: "25%",
    fontWeight: "bold",
  },
  description: {
    color: "#D4D4D4",
    textAlign: "center",
    width: 280,
    alignSelf: "center",
  },
});

export default Goal;
