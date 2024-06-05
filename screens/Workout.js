import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import TabNav from "../components/TabNav";
import { Ionicons } from "@expo/vector-icons";

const Workout = () => {
  const cards = [
    {
      name: "Cardio",
      image: require("../assets/workoutAssets/cardioExercise.png"),
    },
    {
      name: "Strength",
      image: require("../assets/workoutAssets/cardioExercise.png"),
    },
    {
      name: "Flexibility",
      image: require("../assets/workoutAssets/cardioExercise.png"),
    },
    {
      name: "Balance",
      image: require("../assets/workoutAssets/cardioExercise.png"),
    },
    {
      name: "Endurance",
      image: require("../assets/workoutAssets/cardioExercise.png"),
    },
    {
      name: "HIIT",
      image: require("../assets/workoutAssets/cardioExercise.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../assets/workoutAssets/background.png")}
        style={styles.bgImage}
      >
        <View style={styles.contentWrap}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={styles.screenHeading}>
              <Text style={styles.screenHeadingText}>Workout</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            {cards.map((card, index) => (
              <View key={index} style={styles.card}>
                <Image source={card.image} style={styles.cardImage} />
                <Text style={styles.cardText}>{card.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ImageBackground>
      <TabNav activeTab="workout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contentWrap: {
    flex: 1,
    width: "90%",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingTop: 40,
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: "#3A3A3C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  screenHeading: {
    marginLeft: 10,
    padding: 10,
  },
  screenHeadingText: {
    color: "#fff",
    fontSize: 32,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    width: "45%",
    height: 150,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  cardImage: {
    width: "100%",
    height: "70%",
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 18,
    color: "#000",
    marginTop: 10,
  },
});

export default Workout;
