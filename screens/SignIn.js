import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";

const SignIn = () => {
  const navigation = useNavigation();
  const [isRemembered, setIsRemembered] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const toggleRemember = () => {
    setIsRemembered(!isRemembered);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../assets/signInSignUpAssets/signInBackground.png")}
        style={styles.backgroundImage}
      />
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Image
          source={require("../assets/signInSignUpAssets/appIcon.png")}
          style={styles.appIcon}
        />
        <Text style={styles.loginHeading1}>Welcome to</Text>
        <Text style={styles.loginHeading2}>Balanced Workout</Text>

        {/* Email & Password Container */}
        <View style={styles.emailPasswordContainer}>
          {/* Password Section */}
          <View style={styles.emailSection}>
            <Text style={{ color: "#fff" }}>Email</Text>
            <View style={{ position: "relative", justifyContent: "center" }}>
              <Image
                source={require("../assets/signInSignUpAssets/profileIcon.png")}
                style={{
                  position: "absolute",
                  left: 18,
                  top: 22,
                  tintColor: emailFocused ? "#fff" : "#91929F", // Use tintColor to change the color of the image
                }}
              />
              <TextInput
                style={[
                  styles.textInput,
                  emailFocused && { borderColor: "#BDFE30" },
                ]}
                placeholder="helloBalanced@gmail.com"
                placeholderTextColor="#91929F"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>
          </View>

          {/* Password Section */}
          <View style={styles.passwordSection}>
            <Text style={{ color: "#fff" }}>Password</Text>
            <View style={{ position: "relative", justifyContent: "center" }}>
              <Image
                source={require("../assets/signInSignUpAssets/lock.png")}
                style={{
                  position: "absolute",
                  left: 18,
                  top: 22,
                  tintColor: passwordFocused ? "#fff" : "#91929F", // Use tintColor to change the color of the image
                }}
              />
              <TextInput
                style={[
                  styles.textInput,
                  passwordFocused && {
                    borderColor: "#BDFE30",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                ]}
                placeholder="Enter Password"
                placeholderTextColor="#91929F"
                secureTextEntry={true}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={toggleRemember}
                style={({ pressed }) => [
                  styles.circle,
                  isRemembered && styles.circleClicked,
                  pressed && { backgroundColor: "#BDFE30" },
                ]}
              >
                {isRemembered && <Text style={styles.tick}>✓</Text>}
              </Pressable>
              <Text
                style={{
                  color: "#91929F",
                  marginTop: "3%",
                  paddingLeft: "3%",
                }}
              >
                Remember me
              </Text>
            </View>
            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={{ color: "#BDFE30", marginTop: "3%" }}>
                Forgot Password?
              </Text>
            </Pressable>
          </View>

          <View>
            <Pressable
              style={({ pressed }) => [
                styles.loginButton,
                pressed && { backgroundColor: "#91929F" },
              ]}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.text}>Login</Text>
            </Pressable>
          </View>
          <View style={styles.loginOption}>
            <View style={styles.line} />
            <Text style={styles.textLoginOption}>or login with</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.socialButtonsContainer}>
            <Pressable style={styles.appleButton}>
              <Image
                source={require("../assets/signInSignUpAssets/appleIcon.png")}
              />
            </Pressable>
            <Pressable style={styles.socialButton}>
              <Image
                source={require("../assets/signInSignUpAssets/googleIcon.png")}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: "10%",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Don't have an account?
            </Text>
            <Pressable
              onPress={() => navigation.navigate("SignUp")}
              style={{ marginLeft: 5 }}
            >
              <Text style={{ color: "#BDFE30", fontSize: 16 }}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: "10%",
    paddingVertical: "20%",
  },
  appIcon: {
    width: 62,
    height: 65,
    objectFit: "contain",
  },
  loginHeading1: {
    fontSize: 25,
    color: "white",
    marginTop: "5%",
  },
  loginHeading2: {
    fontSize: 30,
    color: "#BDFE30",
    fontWeight: "bold",
  },
  emailPasswordContainer: {
    marginTop: "10%",
  },
  emailSection: {},
  passwordSection: {
    marginTop: "5%",
  },
  textInput: {
    height: 50,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 40,
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginTop: "2%",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#303030",
    justifyContent: "center",
    alignItems: "center",
  },
  circleClicked: {
    backgroundColor: "##BDFE30",
  },
  tick: {
    fontSize: 18,
    color: "black",
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#BDFE30",
    padding: 10,
    margin: 10,
    marginTop: "15%",
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  loginOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginTop: "10%",
  },
  textLoginOption: {
    fontSize: 16,
    marginHorizontal: 10,
    color: "#fff",
  },
  line: {
    flex: 1,
    height: 1,
    marginHorizontal: 10,
    backgroundColor: "#91929F",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10%",
  },
  appleButton: {
    marginHorizontal: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#3A3A3C",
    justifyContent: "center",
    alignItems: "center",
  },
  socialButton: {
    marginHorizontal: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
