import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Alert,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import BackNextButtons from "../components/BackNextButtons";

const UploadPicture = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Sorry, we need camera roll permissions to make this work!"
        );
      }
    })();
  }, []);

  const pickImage = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
            <Image source={{ uri: image }} style={styles.uploadIcon} />
          ) : (
            <Pressable onPress={pickImage}>
              <Image
                source={require("../assets/Profile/UploadIcon.png")}
                style={styles.uploadIcon}
              />
            </Pressable>
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
    borderRadius: 100,
  },
  uploadedImage: {
    width: "40%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
  },
});

export default UploadPicture;
