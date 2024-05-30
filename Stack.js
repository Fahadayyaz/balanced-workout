// Stack.js
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Splash1 from "./screens/Splash1";
import Splash2 from "./screens/Splash2";
import Splash3 from "./screens/Splash3";
import SignIn from "./screens/SignIn";
import ForgotPassword from "./screens/ForgotPassword";
import OTP from "./screens/OTP";
import ChangePassword from "./screens/ChangePassword";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import Gender from "./screens/Gender";
import Age from "./screens/Age";
import Weight from "./screens/Weight";
import Height from "./screens/Height";
import Goal from "./screens/Goal";
import TabNav from "./components/TabNav";
import PhysicalActivity from "./screens/PhysicalActivity";
import ProfilePicture from "./screens/ProfilePicture";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Age" component={Age} />
        <Stack.Screen name="Weight" component={Weight} />
        <Stack.Screen name="Height" component={Height} />
        <Stack.Screen name="Goal" component={Goal} />
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name="PhysicalActivity" component={PhysicalActivity} />
        <Stack.Screen name="ProfilePicture" component={ProfilePicture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
