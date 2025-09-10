// src/screens/Splash.tsx
import React, { useEffect } from "react";
import { View, ActivityIndicator, I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

import i18n from "../../i18next/index";

import { useApp } from "../../store/AppContext";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export default function Splash({ navigation }: Props) {
  const { setLocale, setRTL } = useApp();

  useEffect(() => {
    (async () => {
      try {
        const savedLocale = (await AsyncStorage.getItem("locale")) as
          | "ar"
          | "en"
          | null;
        const savedRtl = await AsyncStorage.getItem("rtl");

        if (savedLocale) {
          await setLocale(savedLocale);
          if (i18n.language !== savedLocale) {
            await i18n.changeLanguage(savedLocale);
          }
        }

        if (savedRtl !== null) {
          const wantRTL = savedRtl === "1";
          await setRTL(wantRTL);

          if (I18nManager.isRTL !== wantRTL) {
            I18nManager.allowRTL(wantRTL);
            I18nManager.forceRTL(wantRTL);

            try {
              await Updates.reloadAsync();
              return;
            } catch {}
          }
        }

        navigation.replace("Auth");
      } catch (e) {
        navigation.replace("Auth");
      }
    })();
  }, [navigation, setLocale, setRTL]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="large" />
    </View>
  );
}
