import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: "relative" }}>
        <Image
          source={require("../assets/ForgotPasswordAssets/forgotBg.png")}
          // style={styles.container}
          style={{ width: "100%", height: "100%" }}
        />
        <StatusBar style="auto" />
      </View>
      <ScrollView
        style={{ position: "absolute", right: 0, left: 0, top: 0, bottom: 0 }}
      >
        <View>
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
              <AntDesign
                name="user"
                size={24}
                color="#fff"
                style={styles.icon}
              />
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginTop: "20%",
    fontWeight: "bold",
  },
  description: {
    color: "#D4D4D4",
    textAlign: "center",
    width: 280,
    alignSelf: "center",
    marginTop: "1%",
  },
  lock: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: "20%",
  },
  emailSection: {
    marginTop: "12%",
    paddingHorizontal: "10%",
  },
  emailLabel: {
    color: "#fff",
  },
  inputContainer: {
    justifyContent: "center",
    top: "10%",
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },

  sendButton: {
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: "36%", // Padding on both sides
    backgroundColor: "#BDFE30",
    padding: "3%",
    marginTop: "40%",
    borderRadius: 30,
  },

  sendButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPassword;
