import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import Auth from "../screens/Auth";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import AppNavigator from "./AppNavigator";

export type RootStackParamList = {
  Onboarding: undefined;
  Auth: undefined;    
  Login: undefined;
  Signup: undefined;
  App: undefined;     
};

// 👇 سَمِّ الستاك بوضوح عشان ما يتعارض مع AppStack
const AuthStack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator  initialRouteName="Onboarding"  screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Auth" component={Auth} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="App" component={AppNavigator} options={{ gestureEnabled: false }} />
    </AuthStack.Navigator>
  );
}