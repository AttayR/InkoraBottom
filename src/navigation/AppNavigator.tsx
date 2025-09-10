import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Create from "../screens/Create";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import TabNavigator from "./TabNavigator";

export type AppStackParamList = {
  Tabs: undefined;
  Home: undefined;
  Create: undefined;
  Profile: undefined;
  Settings: undefined;
};
export type AppScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
  
const AppStack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <AppStack.Navigator  initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        gestureEnabled: true,
      }}>
      <AppStack.Screen name="Tabs" component={TabNavigator} />
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Create" component={Create} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="Settings" component={Settings} />
    </AppStack.Navigator>
  );
}
