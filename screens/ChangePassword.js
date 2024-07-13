import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  Modal,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

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
      <View style={{ position: "relative" }}>
        <Image
          source={require("../assets/ForgotPasswordAssets/forgotBg.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <StatusBar style="auto" />
      </View>
      <ScrollView
        style={{ position: "absolute", right: 0, left: 0, top: 0, bottom: 0 }}
      >
        <View>
          <Text style={styles.heading}>Change Password</Text>
          <Text style={styles.description}>
            Enter your information below or login with another account
          </Text>
          <Image
            source={require("../assets/ForgotPasswordAssets/passwordChangedIcon.png")}
            style={styles.lock}
          />

          <View style={styles.passwordSection}>
            <Text style={styles.passwordLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <EvilIcons
                name="lock"
                size={32}
                color="#fff"
                style={styles.icon}
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
            <Text style={styles.passwordLabel}>Confirm Password</Text>
            <View style={styles.inputContainer}>
              <EvilIcons
                name="lock"
                size={32}
                color="#fff"
                style={styles.icon}
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
              </View>

              <Pressable
                style={styles.modalButton}
                onPress={handleBackToLoginPress}
              >
                <Text style={styles.modalButtonText}>Back to Login</Text>
              </Pressable>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;

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
  passwordSection: {
    marginTop: "6%",
    paddingHorizontal: "10%",
  },
  passwordLabel: {
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
  textInput: {
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
    paddingHorizontal: "36%",
    backgroundColor: "#BDFE30",
    padding: "3%",
    marginTop: "25%",
    borderRadius: 30,
  },
  sendButtonText: {
    color: "#000",
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
    backgroundColor: "#BDFE30",
    borderRadius: 20,
    alignItems: "center",
  },
  modalHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 10,
  },
  modalDescription: {
    marginTop: 10,
    fontSize: 12,
    color: "#000",
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#fff",
    borderRadius: 40,
    marginTop: -33,
  },
  modalButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: "5%",
    paddingHorizontal: 30,
  },
  doneIcon: {
    width: 67,
    height: 67,
  },
});
