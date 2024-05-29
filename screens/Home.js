import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
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
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.content}>
          <View style={styles.activityWrap}>
            <View style={styles.activityText}>
              <Text
                style={{ color: "#BDFE30", fontWeight: "bold", fontSize: 22 }}
              >
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
          <View style={styles.activeWorkoutAndChallengesWrap}>
            {/* Active Workout card starts here */}
            <View style={styles.activeWorkout}>
              <Image
                source={require("../assets/homeAssets/navArrow.png")}
                style={styles.navArrow}
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
              <Text style={styles.cardsText}>Active Workout</Text>
            </View>
            {/* challenges card starts here */}
            <View style={styles.challenges}>
              <Image
                source={require("../assets/homeAssets/navArrow.png")}
                style={styles.navArrow}
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
              <Text style={styles.cardsText}>Challenges</Text>
            </View>
          </View>
          <Pressable
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "#BDFE30",
              borderRadius: 74,
              marginTop: "5%",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Create Feed
            </Text>
          </Pressable>
          <Text style={{ color: "#D4D4D4", fontSize: 22, marginTop: 10 }}>
            Recent Challenges
          </Text>
          <ImageBackground
            source={require("../assets/homeAssets/weightLifting.png")}
            style={{ marginTop: 10, height: 195 }}
          >
            <View style={{ marginLeft: 23, marginTop: 63 }}>
              <Text style={{ color: "#BDFE30", fontSize: 12 }}>
                7x4 Challenge
              </Text>
              <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
                Simply Chest Workout
              </Text>
              <Pressable
                style={{
                  backgroundColor: "#BDFE30",
                  width: 104,
                  height: 35,
                  justifyContent: "center",
                  borderRadius: 40,
                  marginTop: 15,
                }}
              >
                <Text style={{ fontSize: 14, alignSelf: "center" }}>
                  Start Now
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/homeAssets/weightLifting.png")}
            style={{ marginTop: 10, height: 195 }}
          >
            <View style={{ marginLeft: 23, marginTop: 63 }}>
              <Text style={{ color: "#BDFE30", fontSize: 12 }}>
                7x4 Challenge
              </Text>
              <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
                Simply Chest Workout
              </Text>
              <Pressable
                style={{
                  backgroundColor: "#BDFE30",
                  width: 104,
                  height: 35,
                  justifyContent: "center",
                  borderRadius: 40,
                  marginTop: 15,
                }}
              >
                <Text style={{ fontSize: 14, alignSelf: "center" }}>
                  Start Now
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },
  profileWrap: {
    flexDirection: "row",
    marginTop: "11%",
    height: 60,
    alignItems: "center",
    alignSelf: "center",
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
  scrollViewContent: {
    height: "100%",
  },
  content: {
    width: 373,
    alignSelf: "center",
    // backgroundColor: "brown",
  },
  activityWrap: {
    marginTop: "5%",
    width: 373,
    height: 120,
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    borderRadius: 24,
    alignSelf: "center",
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
    marginTop: "5%",
    width: 373,
    height: 166,
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 24,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  activeWorkout: {
    backgroundColor: "#1E1E1E",
    height: 166,
    width: 180,
    flex: 1,
    marginRight: 5,
    borderRadius: 20,
  },
  challenges: {
    backgroundColor: "#1E1E1E",
    height: 166,
    width: 150,
    flex: 1,
    // margin: 2,
    borderRadius: 20,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "#BDFE30",
  },
  navArrow: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 0,
    margin: 10,
  },
  cardsText: {
    color: "#fff",
    position: "absolute",
    bottom: 0,
    marginLeft: 45,
    marginBottom: 20,
  },
});

export default Home;
