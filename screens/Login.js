import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginHeading}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"lightparrot",
  },
  loginHeading: {
    fontSize: 48,
    marginTop: "20%",
  },
});

export default Login;
