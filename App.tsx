import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import "./global.css";
import "./i18next/index";
import { AppProvider } from "./store/AppContext";
import { AuthProvider } from "./src/providers/AuthProvider";
import RootNavigator from "./src/navigation/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  if (Platform.OS === "android") {
  }

  return (
    <SafeAreaProvider>
      <AppProvider>
        <AuthProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </AuthProvider>
      </AppProvider>
    </SafeAreaProvider>
  );
}
