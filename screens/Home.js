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
  Dimensions,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const { width } = Dimensions.get("window");

const Home = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.profileWrap}>
        <View style={styles.profilePicBox}>
          <Image
            source={require("../assets/homeAssets/profilePic.png")}
            style={{ width: 45, height: 45 }}
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
            style={{ width: 45, height: 45 }}
          />
        </View>
        <View style={styles.profileNotificationBox}>
          <Image
            source={require("../assets/homeAssets/notificationIcon.png")}
            style={{ width: 45, height: 45 }}
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
                radius={45}
                value={value}
                textColor="#222"
                fontSize={16}
                valueSuffix={"%"}
                inActiveStrokeColor={"#E2FFF5"}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={35}
                activeStrokeColor={"#BDFE30"}
                activeStrokeWidth={35}
                duration={500}
                showProgressValue={false}
                onAnimationComplete={() => setValue(50)}
              />
            </View>
          </View>
          <View style={styles.activeWorkoutAndChallengesWrap}>
            <Pressable style={styles.activeWorkout}>
              <View>
                <Image
                  source={require("../assets/homeAssets/navArrow.png")}
                  style={styles.navArrow}
                />
                <Image
                  source={require("../assets/homeAssets/activeWorkout.png")}
                  style={{
                    width: 82,
                    height: 63,
                    marginLeft: 40,
                    marginTop: 10,
                  }}
                />
                <Text style={styles.cardsText}>Active Workout</Text>
              </View>
            </Pressable>
            <Pressable style={styles.challenges}>
              <View>
                <Image
                  source={require("../assets/homeAssets/navArrow.png")}
                  style={styles.navArrow}
                />
                <Image
                  source={require("../assets/homeAssets/challenges.png")}
                  style={{
                    width: 82,
                    height: 63,
                    marginLeft: 40,
                    marginTop: 10,
                  }}
                />
                <Text style={styles.cardsText}>Challenges</Text>
              </View>
            </Pressable>
          </View>
          <Pressable style={styles.createFeedButton}>
            <Text style={styles.createFeedButtonText}>Create Feed</Text>
          </Pressable>
          <Text style={{ color: "#D4D4D4", fontSize: 22, marginTop: 10 }}>
            Recent Challenges
          </Text>
          <ImageBackground
            source={require("../assets/homeAssets/weightLifting.png")}
            style={styles.imageBackground}
          >
            <View style={{ marginLeft: 23, marginTop: 63 }}>
              <Text style={{ color: "#BDFE30", fontSize: 12 }}>
                7x4 Challenge
              </Text>
              <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
                Simply Chest Workout
              </Text>
              <Pressable style={styles.startNowButton}>
                <Text style={{ fontSize: 14, alignSelf: "center" }}>
                  Start Now
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/homeAssets/weightLifting.png")}
            style={styles.imageBackground}
          >
            <View style={{ marginLeft: 23, marginTop: 63 }}>
              <Text style={{ color: "#BDFE30", fontSize: 12 }}>
                7x4 Challenge
              </Text>
              <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
                Simply Chest Workout
              </Text>
              <Pressable style={styles.startNowButton}>
                <Text style={{ fontSize: 14, alignSelf: "center" }}>
                  Start Now
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/homeAssets/weightLifting.png")}
            style={styles.imageBackground}
          >
            <View style={{ marginLeft: 23, marginTop: 63 }}>
              <Text style={{ color: "#BDFE30", fontSize: 12 }}>
                7x4 Challenge
              </Text>
              <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
                Simply Chest Workout
              </Text>
              <Pressable style={styles.startNowButton}>
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
  },
  profilePicBox: {
    width: "25%",
    height: 55,
    paddingLeft: "10%",
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    backgroundColor: "#404040",
    justifyContent: "center",
    alignItems: "center",
  },
  profileNameWrap: {
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "space-between",
  },
  profileSearchBox: {
    width: 30,
    height: 50,
    marginRight: 30,
    justifyContent: "center",
    marginLeft: "20%",
  },
  profileNotificationBox: {
    width: 50,
    height: 50,
    justifyContent: "center",
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
    flex: 1,
  },
  content: {
    width: width * 0.9,
    alignSelf: "center",
  },
  activityWrap: {
    marginTop: "5%",
    width: "100%",
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
    width: "100%",
    height: 166,
    flexDirection: "row",
    borderRadius: 24,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  activeWorkout: {
    backgroundColor: "rgba(30, 30, 30, 0.7)",
    height: 166,
    width: "48%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1E1E1E",
    padding: 10,
  },
  challenges: {
    backgroundColor: "rgba(30, 30, 30, 0.7)",
    height: 166,
    width: "48%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1E1E1E",
    padding: 10,
  },
  navArrow: {
    width: 30,
    height: 30,
    marginLeft: "80%",
  },
  cardsText: {
    color: "#fff",
    textAlign: "center",
    marginTop: "8%",
  },
  createFeedButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#BDFE30",
    borderRadius: 74,
    marginTop: "5%",
    justifyContent: "center",
    alignSelf: "center",
  },
  createFeedButtonText: {
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageBackground: {
    marginTop: 10,
    height: 195,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
  startNowButton: {
    backgroundColor: "#BDFE30",
    width: 104,
    height: 35,
    justifyContent: "center",
    borderRadius: 40,
    marginTop: 15,
  },
});

export default Home;
