import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileBar}>
        <View style={styles.profilePicBox}>
          <Image
            source={require("../assets/homeAssets/profilePic.png")}
            style={{ width: 50, height: 50, marginLeft: "40%" }}
          />
        </View>
        <View style={styles.profileNameBox}>
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
      <View style={styles.activityBox}>
        <View style={styles.activityText}>
          <Text style={{ color: "#BDFE30", fontWeight: "bold", fontSize: 22 }}>
            Today's Activity
          </Text>
          <Text style={{ color: "lightgrey" }}>2024 October 25</Text>
        </View>
        <View style={styles.progressCircle}></View>
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
  profileBar: {
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
  profileNameBox: {
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
  activityBox: {
    marginTop: "10%",
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
});

export default Home;
