import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  Pressable,
  TextInput,
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
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/signInSignUpAssets/signInBackground.png")}
        style={styles.container}
      >
        <StatusBar style="auto"></StatusBar>
        <ScrollView>
          <Image
            source={require("../assets/signInSignUpAssets/appIcon.png")}
            style={styles.appIcon}
          />
          <Text style={styles.loginHeading1}>Welcome to</Text>
          <Text style={styles.loginHeading2}>Balanced Workout</Text>

          <View style={{}}>
            <View style={styles.emailSection}>
              <Text style={{ color: "#fff", marginBottom: 10 }}>Email</Text>
              <View style={{ position: "relative", justifyContent: "center" }}>
                <AntDesign
                  name="user"
                  size={24}
                  color={emailFocused ? "#fff" : "#91929F"}
                  style={{ position: "absolute", paddingLeft: 10 }}
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

            <Text style={{ color: "#fff", marginBottom: 10, marginTop: 10 }}>
              Password
            </Text>
            <View style={{ position: "relative", justifyContent: "center" }}>
              <AntDesign
                name="lock"
                size={24}
                color={passwordFocused ? "#fff" : "#91929F"}
                style={{ position: "absolute", paddingLeft: 10 }}
              />
              <TextInput
                style={[
                  styles.textInput,
                  passwordFocused && { borderColor: "#BDFE30" },
                ]}
                placeholder="Enter Password"
                placeholderTextColor="#91929F"
                secureTextEntry={true}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
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
                  style={{ color: "#91929F", marginTop: 7, paddingLeft: 3 }}
                >
                  Remember me
                </Text>
              </View>
              <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
                <Text style={{ color: "#BDFE30" }}>Forgot Password?</Text>
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
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: "10%",
              }}
            >
              <Pressable style={{ marginRight: "10%" }}>
                <Image
                  source={require("../assets/signInSignUpAssets/appleIcon.png")}
                  style={{ width: 51, height: 51 }}
                />
              </Pressable>
              <Pressable>
                <Image
                  source={require("../assets/signInSignUpAssets/googleIcon.png")}
                  style={{ width: 51, height: 51, objectFit: "contain" }}
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
  loginHeading1: {
    fontSize: 25,
    color: "white",
  },
  loginHeading2: {
    fontSize: 30,
    color: "#BDFE30",
    fontWeight: "bold",
  },
  appIcon: {
    width: 62,
    height: 65,
    objectFit: "contain",
    marginBottom: 20,
  },
  emailSection: {
    marginTop: 20,
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
    backgroundColor: "#303030",
  },
  tick: {
    fontSize: 18,
    color: "#fff",
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
  textInput: {
    height: 50,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 40,
    color: "#fff",
  },
});

export default SignIn;
