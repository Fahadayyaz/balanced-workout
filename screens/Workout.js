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
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const cards = [
  {
    name: "Progression",
    image: require("../assets/workoutAssets/progression.png"),
  },
  {
    name: "Courses / Library",
    image: require("../assets/workoutAssets/coursesLibrary.png"),
  },
  {
    name: "Weekly Plans",
    image: require("../assets/workoutAssets/weeklyPlans.png"),
  },
  {
    name: "Cardio Exercise",
    image: require("../assets/workoutAssets/cardioExercise.png"),
  },
  {
    name: "Stretches",
    image: require("../assets/workoutAssets/stretches.png"),
  },
  {
    name: "Challenges",
    image: require("../assets/workoutAssets/challenges.png"),
  },
];

const Workout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="auto" />
      <ImageBackground
        source={require("../assets/workoutAssets/background.png")}
        style={styles.bgImage}
      >
        <View style={styles.contentWrap}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()} // Go back to the previous screen
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={styles.screenHeading}>
              <Text style={styles.screenHeadingText}>Workout</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            {cards.map((card, index) => (
              <TouchableOpacity key={index} style={styles.card}>
                <Image source={card.image} style={[styles.cardImage]} />
                <Text style={styles.cardText}>{card.name}</Text>
                <View style={styles.circle}>
                  <MaterialCommunityIcons
                    name="arrow-top-right"
                    size={14}
                    color="#fff"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
    paddingTop: 50,
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(40, 40, 40, 0.7)",
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
    fontSize: 24,
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
    backgroundColor: "rgba(30, 30, 30, 0.7)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    marginVertical: 10,
    padding: 10,
    position: "relative",
  },
  cardImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 12,
    color: "#fff",
    marginTop: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(45, 45, 45, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 110,
    right: 10,
  },
});

export default Workout;
