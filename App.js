import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Splash1 from "./screens/Splash1";
import Splash2 from "./screens/Splash2";
import Splash3 from "./screens/Splash3";
import Login from "./screens/Login";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
