import React, { createContext, useContext, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppState = {
  locale: "ar" | "en";
  setLocale: (lng: "ar" | "en") => Promise<void>;
  rtl: boolean;
  setRTL: (rtl: boolean) => Promise<void>;
};

const Ctx = createContext<AppState | null>(null);
export const useApp = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp used outside provider");
  return v;
};

export const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [locale, setLocaleState] = useState<"ar" | "en">("ar");
  const [rtl, setRTLState] = useState<boolean>(true);

  const setLocale = async (lng: "ar" | "en") => {
    setLocaleState(lng);
    await AsyncStorage.setItem("locale", lng);
  };
  const setRTL = async (value: boolean) => {
    setRTLState(value);
    await AsyncStorage.setItem("rtl", value ? "1" : "0");
  };

  const value = useMemo(() => ({ locale, setLocale, rtl, setRTL }), [locale, rtl]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};
