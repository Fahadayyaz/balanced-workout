import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
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
    <View style={styles.mainContainer}>
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
          style={styles.appLogo}
        />

        <Text style={styles.heading}>Registration</Text>

        <View style={styles.nameContainer}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require("../assets/signInSignUpAssets/profileIcon.png")}
              style={{
                position: "absolute",
                left: 18,
                width: 13.33,
                height: 16,
                tintColor: nameFocused ? "#fff" : "#91929F", // Use tintColor to change the color of the image
              }}
            />
            <TextInput
              style={[styles.textInput, nameFocused && styles.inputFocused]}
              placeholder="Hammad Habib"
              placeholderTextColor="#91929F"
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            />
          </View>
        </View>

        <View style={styles.emailContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require("../assets/signInSignUpAssets/mailIcon.png")}
              style={{
                position: "absolute",
                left: 18,
                width: 13.33,
                height: 16,
                tintColor: emailFocused ? "#fff" : "#91929F", // Use tintColor to change the color of the image
              }}
            />
            <TextInput
              style={[styles.textInput, emailFocused && styles.inputFocused]}
              placeholder="helloBalanced@gmail.com"
              placeholderTextColor="#91929F"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </View>
        </View>

        <View style={styles.passwordContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require("../assets/signInSignUpAssets/lock.png")}
              style={{
                position: "absolute",
                left: 18,
                width: 13.33,
                height: 16,
                tintColor: passwordFocused ? "#fff" : "#91929F", // Use tintColor to change the color of the image
              }}
            />
            <TextInput
              style={[styles.textInput, passwordFocused && styles.inputFocused]}
              placeholder="Enter Password"
              placeholderTextColor="#91929F"
              secureTextEntry={true}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
          </View>
        </View>

        <View style={styles.confirmPasswordContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputWrapper}>
            <Image
              source={require("../assets/signInSignUpAssets/lock.png")}
              style={{
                position: "absolute",
                left: 18,
                width: 13.33,
                height: 16,
                tintColor: confirmPasswordFocused ? "#fff" : "#91929F", // Use tintColor to change the color of the image
              }}
            />
            <TextInput
              style={[
                styles.textInput,
                confirmPasswordFocused && styles.inputFocused,
              ]}
              placeholder="Confirm Password"
              placeholderTextColor="#91929F"
              secureTextEntry={true}
              onFocus={() => setConfirmPasswordFocused(true)}
              onBlur={() => setConfirmPasswordFocused(false)}
            />
          </View>
        </View>

        <View style={styles.rememberMeContainer}>
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
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate("Gender")}
          style={({ pressed }) => [
            styles.signUpButton,
            pressed && { backgroundColor: "#91929F" },
          ]}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </Pressable>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or Sign Up with</Text>
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

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.signInLink}>Sign In</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  appLogo: {
    width: 62,
    height: 65,
    marginTop: "10%",
  },
  heading: {
    fontSize: 30,
    color: "#BDFE30",
    fontWeight: "bold",
    marginTop: "5%",
    marginBottom: "5%",
  },
  nameContainer: {
    width: "100%",
    marginTop: "5%",
  },
  emailContainer: {
    width: "100%",
    marginTop: "5%",
  },
  passwordContainer: {
    width: "100%",
    marginTop: "5%",
  },
  confirmPasswordContainer: {
    width: "100%",
    marginTop: "5%",
  },
  circleClicked: {
    backgroundColor: "##BDFE30",
  },
  label: {
    color: "#fff",
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
    marginTop: "2%",
  },
  icon: {
    position: "absolute",
    paddingLeft: 15,
  },
  textInput: {
    height: 50,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 50,
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  inputFocused: {
    borderColor: "#BDFE30",
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#303030",
    justifyContent: "center",
    alignItems: "center",
  },
  circleChecked: {
    backgroundColor: "##BDFE30",
  },
  tick: {
    fontSize: 18,
    color: "black",
  },
  rememberMeText: {
    color: "#91929F",
    marginLeft: 10,
  },
  signUpButton: {
    backgroundColor: "#BDFE30",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignItems: "center",
    marginTop: "10%",
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#91929F",
  },
  dividerText: {
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10%",
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
  appleButton: {
    marginHorizontal: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#3A3A3C",
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
  },
  signInLink: {
    color: "#BDFE30",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default SignUp;
