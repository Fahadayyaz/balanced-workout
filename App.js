import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
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
import Workout from "./screens/Workout";
import Profile from "./screens/Profile";
import Explore from "./screens/Explore";
import Settings from "./screens/Settings";
import Goal from "./screens/Goal";
import ActiveWorkout from "./screens/ActiveWorkout";
import TabNav from "./components/TabNav";
import PhysicalActivity from "./screens/PhysicalActivity";
import ProfilePicture from "./screens/ProfilePicture";
import Challenges from "./screens/Challenges";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#BDFE30",
        tabBarInactiveTintColor: "#B6B6B6",
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          justifyContent: "center",
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: "#3A3A3C",
          borderTopWidth: 1,
          borderTopColor: "transparent",
          position: "absolute",
          bottom: 20,
          elevation: 0,
          borderRadius: 40,
          height: 60,
          left: 20,
          right: 20,
          alignSelf: "center",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent = Ionicons;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Workout") {
            iconName = "dumbbell";
            IconComponent = FontAwesome6;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "compass" : "compass-outline";
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Challenges"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash1" component={Splash1} />
      <Stack.Screen name="Splash2" component={Splash2} />
      <Stack.Screen name="Splash3" component={Splash3} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Age" component={Age} />
      <Stack.Screen name="Weight" component={Weight} />
      <Stack.Screen name="Height" component={Height} />
      <Stack.Screen name="Workout" component={Workout} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Goal" component={Goal} />
      <Stack.Screen name="ActiveWorkout" component={ActiveWorkout} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="PhysicalActivity" component={PhysicalActivity} />
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Challenges" component={Challenges} />
      <Stack.Screen name="ProfilePicture" component={ProfilePicture} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
