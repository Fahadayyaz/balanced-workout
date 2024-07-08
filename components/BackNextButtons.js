import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackNextButtons = ({ nextPath }) => {
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
    navigation.navigate(nextPath);
  }, [navigation, nextPath]);

  return (
    <View style={styles.navButtonsContainer}>
      <View style={styles.buttonWrapper}>
        <Pressable
          onPress={handleBackPress}
          style={({ pressed }) => [
            styles.navButton,
            {
              backgroundColor: pressed || isBackPressed ? "#BDFE30" : "#91929F",
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
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable
          onPress={handleNextPress}
          style={({ pressed }) => [
            styles.navButton,
            {
              backgroundColor: pressed || isNextPressed ? "#BDFE30" : "#91929F",
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
    </View>
  );
};

const styles = StyleSheet.create({
  navButtonsContainer: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    right: 0,
    left: 0,
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    width: "40%",
  },
  navButton: {
    flexDirection: "row",
    borderRadius: 50,
    width: "100%",
    height: 59,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    paddingTop: 5,
    textAlign: "center",
  },
});

export default BackNextButtons;
