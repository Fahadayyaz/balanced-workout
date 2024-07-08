import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import BackNextButtons from "../components/BackNextButtons";

const Weight = () => {
  const weightData = useMemo(
    () => Array.from({ length: 200 }, (_, i) => `${i + 1}`),
    []
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/signInSignUpAssets/editProfileBg.png")}
        style={styles.bgImage}
      >
        <Text style={styles.heading}>What's Your Weight?</Text>
        <Text style={styles.description}>You can always change this later</Text>
        <View style={styles.pickerContainer}>
          <ScrollPicker
            dataSource={weightData}
            selectedIndex={2}
            renderItem={(data, index) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>
                  {data}
                  <Text style={styles.kgText}> kg</Text>
                </Text>
              </View>
            )}
            onValueChange={(data, selectedIndex) => {}}
            wrapperHeight={430}
            itemHeight={80}
            highlightColor="#BDFE30"
            highlightBorderWidth={4}
            wrapperBackground="transparent"
          />
        </View>
        <BackNextButtons nextPath="Height" />
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
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
  },
  itemText: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
  },
  kgText: {
    fontSize: 20,
    color: "white",
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
  pickerContainer: {
    width: "50%",
    height: "50%",
    marginTop: "20%",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default Weight;
