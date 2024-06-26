import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useMemo } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Age = () => {
  const navigation = useNavigation();
  const [isBackPressed, setIsBackPressed] = useState(false);
  const [isNextPressed, setIsNextPressed] = useState(false);

  const handleBackPress = useCallback(() => {
    setIsBackPressed(true);
    setIsNextPressed(false);
    navigation.goBack();
  }, [navigation]);

  const handleNextPress = useCallback(() => {
    setIsNextPressed(true);
    setIsBackPressed(false);
    navigation.navigate("Weight");
  }, [navigation]);

  const buttonStyle = useCallback((pressed) => ({
    backgroundColor: pressed ? "#BDFE30" : "#91929F",
    ...styles.button,
  }), []);

  const buttonText = useCallback((pressed) => ({
    color: pressed ? "black" : "#fff",
  }), []);

  const ageData = useMemo(() => Array.from({ length: 150 }, (_, i) => (i + 1).toString()), []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/signInSignUpAssets/editProfileBg.png")}
        style={styles.bgImage}
      >
        <Text style={styles.heading}>How Old Are You?</Text>
        <Text style={styles.description}>
          This helps us create your personalized plan
        </Text>
        <View style={styles.pickerContainer}>
          <ScrollPicker
            dataSource={ageData}
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
            highlightBorderWidth={5}
            wrapperBackground="transparent"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={handleBackPress}
            style={({ pressed }) => buttonStyle(pressed)}
          >
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color={buttonText(isBackPressed).color}
            />
            <Text style={[styles.buttonText, buttonText(isBackPressed)]}>
              Back
            </Text>
          </Pressable>
          <Pressable
            onPress={handleNextPress}
            style={({ pressed }) => buttonStyle(pressed)}
          >
            <Text style={[styles.buttonText, buttonText(isNextPressed)]}>
              Next
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={buttonText(isNextPressed).color}
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
  bgImage: {
    flex: 1,
    paddingHorizontal: 30,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
  },
  itemText: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
  },
  pickerContainer: {
    width: "50%",
    height: "50%",
    marginTop: "40%",
    alignItems: "center",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: "auto",
    marginTop: "10%",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 50,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 5,
  },
});

export default Age;
