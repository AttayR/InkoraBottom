import React from "react";
import { View, Text, TouchableOpacity,Pressable} from "react-native";
import { useTranslation } from "react-i18next";
import { useAuth } from "../providers/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigator";

type P = NativeStackScreenProps<AppStackParamList, "Home">;

export default function Home({ navigation }: P) {

  const { signOut } = useAuth();
  const navigate = useNavigation();
  const { t } = useTranslation();

    const onLogout = async () => {
    await signOut(); 
    // @ts-ignore
    navigate.reset({ index: 0, routes: [{ name: "AuthFlow" }] });
  };

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-heading">{t("home")}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text className="text-primary">{t("settings")}</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-gray-600">شلولخ</Text>

      <TouchableOpacity className="btn btn-primary mt-6" onPress={() => navigation.navigate("Create")}>
        <Text className="text-white font-semibold">{t("create")}</Text>
      </TouchableOpacity>
      <Pressable onPress={onLogout} className="rounded-full bg-teal-400 px-6 py-3">
        <Text className="text-white font-bold">Log out</Text>
      </Pressable>
      
    </View>
  );
}
