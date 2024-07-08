import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const ProfilePicture = () => {
  const navigation = useNavigation();
  const [isBackPressed, setIsBackPressed] = useState(false);
  const [isNextPressed, setIsNextPressed] = useState(false);
  const [image, setImage] = useState(null);

  const handleBackPress = useCallback(() => {
    setIsBackPressed(true);
    setIsNextPressed(false);
    navigation.goBack();
  }, [navigation]);

  const handleNextPress = useCallback(() => {
    setIsNextPressed(true);
    setIsBackPressed(false);
    navigation.navigate("SignIn");
  }, [navigation]);

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

  const backButtonStyle = useMemo(
    () => ({
      backgroundColor: isBackPressed ? "#BDFE30" : "#91929F",
      ...styles.button,
    }),
    [isBackPressed]
  );

  const nextButtonStyle = useMemo(
    () => ({
      backgroundColor: isNextPressed ? "#BDFE30" : "#91929F",
      ...styles.button,
    }),
    [isNextPressed]
  );

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

        <Pressable onPress={pickImage} style={styles.uploadIconContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.uploadedImage} />
          ) : (
            <Image
              source={require("../assets/Profile/UploadIcon.png")}
              style={styles.uploadIcon}
            />
          )}
        </Pressable>

        <View style={styles.buttonContainer}>
          <Pressable onPress={handleBackPress} style={backButtonStyle}>
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color={isBackPressed ? "black" : "#fff"}
            />
            <Text
              style={[
                styles.buttonText,
                { color: isBackPressed ? "black" : "#fff" },
              ]}
            >
              Back
            </Text>
          </Pressable>
          <Pressable onPress={handleNextPress} style={nextButtonStyle}>
            <Text
              style={[
                styles.buttonText,
                { color: isNextPressed ? "black" : "#fff" },
              ]}
            >
              Next
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={isNextPressed ? "black" : "#fff"}
            />
          </Pressable>
        </View>
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
    paddingHorizontal: "8%",
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
    width: "70%",
    alignSelf: "center",
  },
  uploadIconContainer: {
    alignItems: "center",
  },
  uploadIcon: {
    marginTop: "60%",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: "auto",
    marginTop: "80%",
  },
  button: {
    flexDirection: "row",
    padding: "2.5%",
    borderRadius: 50,
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    marginLeft: "5%",
  },
});

export default ProfilePicture;
