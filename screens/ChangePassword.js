import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  Modal,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons"; // Make sure you have expo-vector-icons installed

const ChangePassword = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSavePress = () => {
    setModalVisible(true);
  };

  const handleBackToLoginPress = () => {
    setModalVisible(false);
    navigation.navigate("SignIn");
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/ForgotPasswordAssets/forgotBg.png")}
        style={styles.container}
      >
        <Text style={styles.heading}>Change Password</Text>
        <Text style={styles.description}>
          Enter your information below or login with a other account
        </Text>
        <Image
          source={require("../assets/ForgotPasswordAssets/passwordChangedIcon.png")}
          style={styles.changeIcon}
        />

        <View style={styles.passwordSection}>
          <Text style={{ color: "#fff", marginBottom: 10 }}>Password</Text>
          <View style={{ position: "relative" }}>
            <EvilIcons
              name="lock"
              size={32}
              color="#fff"
              style={{ position: "absolute", top: 13, left: 15 }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter New Password"
              placeholderTextColor="#91929F"
              secureTextEntry={true}
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
              size={32}
              color="#fff"
              style={{ position: "absolute", top: 13, left: 15 }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Confirm New Password"
              placeholderTextColor="#91929F"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View>
          <Pressable
            style={({ pressed }) => [
              styles.sendButton,
              pressed && { backgroundColor: "#91929F" },
            ]}
            onPress={handleSavePress}
          >
            <Text style={styles.sendButtonText}>Save</Text>
          </Pressable>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Image
                source={require("../assets/ForgotPasswordAssets/doneIcon.png")}
                style={styles.doneIcon}
              />
              <Text style={styles.modalHeading}>Changed Successfully</Text>
              <Text style={styles.modalDescription}>
                Your password has been changed successfully
              </Text>
              <Pressable
                style={styles.modalButton}
                onPress={handleBackToLoginPress}
              >
                <Text style={styles.modalButtonText}>Back to Login</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

export default ChangePassword;

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
    width: 366,
    height: 17,
    alignSelf: "center",
    marginTop: 10,
  },
  changeIcon: {
    width: 180,
    height: 180, // Add height to keep the image aspect ratio
    alignSelf: "center",
    marginTop: "20%",
  },
  passwordSection: {
    marginTop: 20,
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
  sendButton: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#BDFE30",
    padding: 10,
    width: "90%",
    marginTop: "20%", // Adjust marginTop for consistency
    borderRadius: 30,
  },
  sendButtonText: {
    color: "#000", // Ensure the text is visible on the button
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    height: "30%",
    padding: 20,
    backgroundColor: "#BDFE30", // Parrot green color
    borderRadius: 20,
    alignItems: "center",
  },
  modalHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 40,
    marginTop: "16%",
  },
  modalButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
  doneIcon: {
    width: 67,
  },
});
