import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const refs = useRef(otp.map(() => React.createRef()));
  const navigation = useNavigation(); // Get navigation object

  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // If last digit is entered, navigate to Home.js
    if (text && index === refs.current.length - 1) {
      navigation.navigate("ChangePassword"); // Navigate to Home.js
    } else if (text && index < refs.current.length - 1) {
      refs.current[index + 1].current.focus();
    } else if (!text && index > 0) {
      refs.current[index - 1].current.focus();
    } else if (!text && index === 0) {
      refs.current[index].current.focus();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="auto" />
      <ImageBackground
        source={require("../assets/ForgotPasswordAssets/forgotBg.png")}
        style={styles.container}
      >
        <Text style={styles.heading}>OTP Verification</Text>
        <Text style={styles.description}>
          Check your email. We’ve sent you the PIN at your email.
        </Text>
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/ForgotPasswordAssets/emailIcon.png")}
            style={styles.icon}
          />
        </View>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={refs.current[index]}
              style={[
                styles.otpInput,
                { borderBottomColor: digit ? "#BDFE30" : "transparent" },
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => handleChange(text, index)}
              value={digit}
              placeholder="*"
              placeholderTextColor="#BDFE30"
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace" && otp[index] === "") {
                  if (index > 0) {
                    refs.current[index - 1].current.focus();
                  }
                }
              }}
            />
          ))}
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
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  iconContainer: {
    marginBottom: 30,
  },
  icon: {
    width: 180,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  otpInput: {
    width: 50,
    height: 50,
    color: "#fff",
    backgroundColor: "#161616",
    borderRadius: 1,
    textAlign: "center",
    fontSize: 18,
    borderBottomWidth: 2,
  },
});

export default OTP;
