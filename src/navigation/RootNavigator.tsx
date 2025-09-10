import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../providers/AuthProvider";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { Text } from "react-native";

export type RootStackParamList = {
  AuthFlow: undefined;
  App: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <RootStack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      {user ? (
        <RootStack.Screen name="App" component={AppNavigator} />
      ) : (
        <RootStack.Screen name="AuthFlow" component={AuthNavigator} />
      )}

    </RootStack.Navigator>
  );
}
