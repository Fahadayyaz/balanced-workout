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
import { Feather, AntDesign, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";

const SignUp = () => {
  const navigation = useNavigation();
  const [isRemembered, setIsRemembered] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const toggleRemember = () => {
    setIsRemembered(!isRemembered);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/signInSignUpAssets/signInBackground.png")}
        style={styles.container}
      >
        <StatusBar style="light" />
        <ScrollView>
          <Image
            source={require("../assets/signInSignUpAssets/appIcon.png")}
            style={styles.appIcon}
          />

          <Text style={styles.loginHeading2}>Registration</Text>

          <View>
            <View style={styles.nameEmailSection}>
              <Text style={{ color: "#fff", marginBottom: 10 }}>Name</Text>
              <View style={{ position: "relative" }}>
                <AntDesign
                  name="user"
                  size={24}
                  color={nameFocused ? "#fff" : "#91929F"}
                  style={{ position: "absolute", top: 13, left: 15 }}
                />
                <TextInput
                  style={[
                    styles.textInput,
                    nameFocused && { borderColor: "#BDFE30" },
                  ]}
                  placeholder="Hammad Habib"
                  placeholderTextColor="#91929F"
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                />
              </View>
            </View>

            <View style={styles.nameEmailSection}>
              <Text style={{ color: "#fff", marginBottom: 10 }}>Email</Text>
              <View style={{ position: "relative" }}>
                <Feather
                  name="mail"
                  size={24}
                  color={emailFocused ? "#fff" : "#91929F"}
                  style={{ position: "absolute", top: 13, left: 15 }}
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
            <View style={styles.passwordSection}>
              <Text style={{ color: "#fff", marginBottom: 10 }}>Password</Text>
              <View style={{ position: "relative", justifyContent: "center" }}>
                <EvilIcons
                  name="lock"
                  size={42}
                  color={passwordFocused ? "#fff" : "#91929F"}
                  style={{
                    position: "absolute",
                  }}
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
            </View>

            <View style={styles.passwordSection}>
              <Text style={{ color: "#fff", marginBottom: 10 }}>
                Confirm Password
              </Text>
              <View style={{ position: "relative" }}>
                <EvilIcons
                  name="lock"
                  size={42}
                  color={confirmPasswordFocused ? "#fff" : "#91929F"}
                  style={{ position: "absolute", top: 13, left: 10 }}
                />
                <TextInput
                  style={[
                    styles.textInput,
                    confirmPasswordFocused && { borderColor: "#BDFE30" },
                  ]}
                  placeholder="Confirm Password"
                  placeholderTextColor="#91929F"
                  secureTextEntry={true}
                  onFocus={() => setConfirmPasswordFocused(true)}
                  onBlur={() => setConfirmPasswordFocused(false)}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={toggleRemember}
                style={({ pressed }) => [
                  styles.circle,
                  isRemembered && styles.circleClicked,
                  pressed && { backgroundColor: "" },
                ]}
              >
                {isRemembered && <Text style={styles.tick}>✓</Text>}
              </Pressable>
              <Text style={{ color: "#91929F", marginTop: 15, marginLeft: 10 }}>
                Remember me
              </Text>
            </View>
            <View>
              <Pressable
                onPress={() => navigation.navigate("Gender")}
                style={({ pressed }) => [
                  styles.loginButton,
                  pressed && { backgroundColor: "#91929F" },
                ]}
              >
                <Text style={styles.text}>Sign Up</Text>
              </Pressable>
            </View>
            <View style={styles.loginOption}>
              <View style={styles.line} />
              <Text style={styles.textLoginOption}>or Sign Up with</Text>
              <View style={styles.line} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 10,
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
                marginTop: 5,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>
                Already have an account?
              </Text>
              <Pressable
                onPress={() => navigation.navigate("SignIn")}
                style={{ marginLeft: 5 }}
              >
                <Text style={{ color: "#BDFE30", fontSize: 16 }}>Sign In</Text>
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
  loginHeading2: {
    fontSize: 30,
    color: "#BDFE30",
    fontWeight: "bold",
  },
  appIcon: {
    width: 48,
    height: 40,
    objectFit: "contain",
    marginBottom: 20,
  },
  passwordSection: {
    marginTop: 10,
  },
  nameEmailSection: {
    marginTop: 10,
  },
  circle: {
    marginTop: 10,
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
    marginTop: 10,
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
    marginTop: 10,
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
    paddingLeft: 50,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    color: "#fff",
  },
});

export default SignUp;
