import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const Home = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.profileWrap}>
        <View style={styles.profilePicBox}>
          <Image
            source={require("../assets/homeAssets/profilePic.png")}
            style={{ width: 50, height: 50, marginLeft: "40%" }}
          />
        </View>
        <View style={styles.profileNameWrap}>
          <Text style={styles.text1}>
            Hi,<Text style={styles.text2}> Kaile</Text>
          </Text>
        </View>
        <View style={styles.profileSearchBox}>
          <Image
            source={require("../assets/homeAssets/searchIcon.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={styles.profileNotificationBox}>
          <Image
            source={require("../assets/homeAssets/notificationIcon.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </View>
      <View style={styles.activityWrap}>
        <View style={styles.activityText}>
          <Text style={{ color: "#BDFE30", fontWeight: "bold", fontSize: 22 }}>
            Today's Activity
          </Text>
          <Text style={{ color: "lightgrey" }}>2024 October 25</Text>
        </View>
        <View style={styles.progressCircle}>
          <CircularProgress
            radius={50}
            value={value}
            textColor="#222"
            fontSize={16}
            valueSuffix={"%"}
            inActiveStrokeColor={"#E2FFF5"}
            inActiveStrokeOpacity={0.5}
            inActiveStrokeWidth={30}
            activeStrokeColor={"#BDFE30"}
            activeStrokeWidth={30}
            duration={2000}
            showProgressValue={false}
            onAnimationComplete={() => setValue(50)}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "transparent",
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#1E1E1E",
            height: 166,
            width: 150,
            flex: 1,
            margin: 5,
            borderRadius: 20,
            marginLeft: 35,
          }}
        >
          <Image
            source={require("../assets/homeAssets/navArrow.png")}
            style={{
              width: 40,
              height: 40,
              position: "absolute",
              right: 0,
              margin: 10,
            }}
          />
          <Image
            source={require("../assets/homeAssets/activeWorkout.png")}
            style={{
              width: 82,
              height: 63,
              position: "absolute",
              bottom: 0,
              margin: 50,
            }}
          />
          <Text
            style={{
              color: "#fff",
              position: "absolute",
              bottom: 0,
              marginLeft: 45,
              marginBottom: 20,
            }}
          >
            Challenges
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#1E1E1E",
            height: 166,
            width: 150,
            flex: 1,
            margin: 5,
            borderRadius: 20,
            marginRight: 35,
            borderWidth: 1,
            borderColor: "#BDFE30",
          }}
        >
          <Image
            source={require("../assets/homeAssets/navArrow.png")}
            style={{
              width: 40,
              height: 40,
              position: "absolute",
              right: 0,
              margin: 10,
            }}
          />
          <Image
            source={require("../assets/homeAssets/challenges.png")}
            style={{
              width: 82,
              height: 63,
              position: "absolute",
              bottom: 0,
              margin: 50,
            }}
          />
          <Text
            style={{
              color: "#fff",
              position: "absolute",
              bottom: 0,
              marginLeft: 45,
              marginBottom: 20,
            }}
          >
            Challenges
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    alignItems: "center",
  },
  profileWrap: {
    flexDirection: "row",
    marginTop: "15%",
    height: 60,
    alignItems: "center",
  },
  profilePicBox: {
    width: "25%",
    height: 60,
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    backgroundColor: "#404040",
    justifyContent: "center",
  },
  profileNameWrap: {
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "space-between",
  },
  profileSearchBox: {
    width: 40, // Reduced the width to create space for the notification icon
    height: 50,
    marginRight: 10,
    marginLeft: "20%",
  },
  profileNotificationBox: {
    width: 50,
    height: 50,
    marginLeft: "3%",
  },
  text1: {
    color: "#fff",
    fontSize: 24,
  },
  text2: {
    color: "#BDFE30",
    fontWeight: "bold",
    fontSize: 24,
  },
  activityWrap: {
    marginTop: "5%",
    width: "85%",
    height: "15%",
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    borderRadius: 24,
  },
  activityText: {
    paddingTop: "10%",
    paddingLeft: "5%",
  },
  progressCircle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeWorkoutAndChallengesWrap: {
    backgroundColor: "transparent",
    marginTop: 10,
    flexDirection: "row",
  },
  activeWorkout: {
    backgroundColor: "#1E1E1E",
    height: 166,
    width: 150,
    flex: 1,
    margin: 5,
    borderRadius: 24,
    marginLeft: 35,
  },
  challenges: {
    backgroundColor: "#1E1E1E",
    height: 166,
    width: 150,
    flex: 1,
    margin: 5,
    borderRadius: 24,
    marginRight: 35,
    borderWidth: 1,
    borderColor: "#BDFE30",
  },
  navArrow: {
    width: 38,
    height: 38,
    marginTop: 5,
    marginLeft: "70%",
    marginBottom: 5,
  },
});

export default Home;
