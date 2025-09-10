import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  Platform,
} from "react-native";
import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AuthNavigator";
import PrimaryButton from "../../components/PrimaryButton";

type P = NativeStackScreenProps<RootStackParamList, "Onboarding">;

export default function Onboarding({ navigation }: P) {
  const { t, i18n } = useTranslation();

  const goNext = () => navigation.navigate("Auth");

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Top bar */}
      <View className="px-5 pt-2">
        <View className="flex-row items-center justify-between">
          {/* Language pill (Arabic / English) */}
          <Pressable
            onPress={() =>
              i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
            }
            className="h-12 px-3 rounded-full border border-[#00E6E6] justify-center"
            style={{
              shadowColor: "#00E6E6",
              shadowOpacity: 0.1,
              shadowRadius: 6,
            }}
          >
            <Text className="text-[14px] font-semibold text-[#00CFCF]">
              {i18n.language === "ar" ? "English" : "عربي"}
            </Text>
          </Pressable>
          {/* Skip */}
          <Pressable hitSlop={8} onPress={goNext}>
            <Text className="text-[14px] text-gray-500">{t("skip")}</Text>
          </Pressable>
        </View>
      </View>

      {/* Illustration */}
      <View className="flex-1 items-center justify-center px-8">
        <Image
          source={require("../../assets/onboarding/illustration.png")}
          resizeMode="contain"
          className="w-full"
          style={{ height: 340 }}
        />
      </View>

      {/* Content */}
      <View className="px-8 pb-6">
        <Text className="text-[28px] font-extrabold text-neutral-700 text-center leading-tight mb-3">
          {t("onboarding_title", "Welcome to Inkora!")}
        </Text>

        <Text className="text-[18px] text-gray-500 text-center leading-8 mb-6">
          {t("onboarding_sub")}
        </Text>

        {/* Pagination dots */}
        <View className="flex-row items-center justify-center gap-3 mb-8 mt-6">
          <View className="h-3 w-3 rounded-full bg-[#00D8D8]" />
          <View className="h-3 w-3 rounded-full bg-gray-300" />
        </View>

        {/* Get Started button (gradient pill) */}
       <PrimaryButton title={t("get_started")} onPress={goNext} />

        {/* iOS home indicator spacer */}
        {Platform.OS === "ios" ? <View className="h-3" /> : null}
      </View>
    </SafeAreaView>
  );
}
