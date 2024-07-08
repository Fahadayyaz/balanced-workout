import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import BackNextButtons from "../components/BackNextButtons"; // Assuming this is the correct path to BackNextButtons

const ProfilePicture = () => {
  const [image, setImage] = useState(null);

  const pickImage = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri); // Ensure that the image URI is set correctly
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/signInSignUpAssets/editProfileBg.png")}
        style={styles.bgImage}
      >
        <Text style={styles.profilePicHeading}>Profile Picture</Text>
        <Text style={styles.profilePicDescription}>
          Please add your profile picture
        </Text>
        <View style={styles.uploadIconContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.uploadedImage} />
          ) : (
            <Image
              source={require("../assets/Profile/UploadIcon.png")}
              style={styles.uploadIcon}
            />
          )}
        </View>
        <BackNextButtons nextPath="SignIn" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  profilePicHeading: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginTop: "25%",
    fontWeight: "bold",
  },
  profilePicDescription: {
    color: "#D4D4D4",
    textAlign: "center",
    width: 280,
    alignSelf: "center",
  },
  uploadIconContainer: {
    alignItems: "center",
  },
  uploadIcon: {
    marginTop: "45%",
    width: "40%",
    height: undefined,
    aspectRatio: 1,
  },
  uploadedImage: {
    width: "40%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 75,
  },
});

export default ProfilePicture;
