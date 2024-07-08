import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Make sure you have expo-vector-icons installed

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/ForgotPasswordAssets/forgotBg.png")}
        style={styles.container}
      >
        <Text style={styles.heading}>Forgot Password?</Text>
        <Text style={styles.description}>
          Enter your information below or login with another account
        </Text>
        <Image
          source={require("../assets/ForgotPasswordAssets/lock.png")}
          style={styles.lock}
        />
        <View style={styles.emailSection}>
          <Text style={styles.emailLabel}>Email</Text>
          <View style={styles.inputContainer}>
            <AntDesign name="user" size={24} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="helloBalanced@gmail.com"
              placeholderTextColor="#91929F"
            />
          </View>
        </View>
        <View>
          <Pressable
            style={({ pressed }) => [
              styles.sendButton,
              pressed && { backgroundColor: "#91929F" },
            ]}
            onPress={() => navigation.navigate("OTP")}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 80,
  },

  heading: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginTop: "10%",
    fontWeight: "bold",
  },
  description: {
    color: "#D4D4D4",
    textAlign: "center",
    width: 280,
    alignSelf: "center",
    marginTop: 10,
  },
  lock: {
    width: 180,
    height: 180, // Add height to keep the image aspect ratio
    alignSelf: "center",
    marginTop: "20%",
  },
  emailSection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  emailLabel: {
    color: "#fff",
    marginBottom: 10,
  },
  inputContainer: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 13,
    left: 15,
  },
  input: {
    height: 50,
    paddingLeft: 50,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Add slight background for better visibility
  },
  sendButton: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#BDFE30",
    padding: 10,
    width: "90%",
    marginTop: "40%", // Adjust marginTop for consistency
    borderRadius: 30,
  },
  sendButtonText: {
    color: "#000", // Ensure the text is visible on the button
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPassword;
