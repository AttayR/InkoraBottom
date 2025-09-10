import React from "react";
import { SafeAreaView, View, Text, Image, Pressable, Platform } from "react-native";
import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AuthNavigator";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";


type P = NativeStackScreenProps<RootStackParamList, "Auth">;

export default function Auth({ navigation }: P) {
  const { t } = useTranslation();

 const goToLogin = () => navigation.navigate("Login");
 const goToSignup = () => navigation.navigate("Signup");

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Illustration */}
      <View className="items-center pt-32 px-8">
        <Image
          source={require("../../assets/auth/authImage.png")}
          resizeMode="contain"
          className="w-full"
          style={{ height: 296 , width: 296}}
        />
      </View>

      {/* Texts */}
      <View className="px-10 mt-6 items-center">
        <Text className="text-[22px] font-extrabold text-black text-center mb-2">
          {t("auth_title")}
        </Text>
        <Text className="text-[14px] text-gray-500 text-center leading-6">
          {t(
            "auth_sub",
            "Help you carry an almost unlimited\namount of books."
          )}
        </Text>

        {/* Pagination dots */}
        <View className="flex-row items-center justify-center gap-3 mb-8 mt-6">
          <View className="h-3 w-3 rounded-full  bg-gray-300"/>
          <View className="h-3 w-3 rounded-full  bg-[#00D8D8]"/>
        </View>
      </View>

      {/* Buttons */}
      <View className="px-8 mt-8">
        <View className="flex-row items-center justify-center gap-4">
          {/* Log In - outlined pill */}
          <Pressable>
            <SecondaryButton 
            title={t("log_in", "Log In")} 
            width={120} 
            textStyle={{ fontSize: 14, fontWeight: "600" }} 
            onPress={goToLogin}
          />
          </Pressable>

          {/* Sign Up - filled gradient pill */}
          <Pressable>
            <PrimaryButton 
            title={t("sign_up", "Sign Up")} 
            onPress={goToSignup} 
            width={120} 
            textStyle={{ fontSize: 14, fontWeight: "600" }} />
          </Pressable>
        </View>

        {/* iOS home indicator spacer */}
        <View style={{ height: Platform.OS === "ios" ? 28 : 20 }} />
      </View>
    </SafeAreaView>
  );
}
