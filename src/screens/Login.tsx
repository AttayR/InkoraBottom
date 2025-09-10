import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/PrimaryButton";
import { useTranslation } from "react-i18next";
import { useAuth } from "../providers/AuthProvider";

const Input = ({
  icon,
  placeholder,
  secure = false,
  value,
  onChangeText,
}: {
  icon: any;
  placeholder: string;
  secure?: boolean;
  value: string;
  onChangeText: (t: string) => void;
}) => (
  <View className="w-full mb-4">
    <View className="flex-row items-center rounded-full border border-gray-200 bg-gray-100 px-5">
      <Image source={icon} className="h-12 w-10 mr-3 opacity-60" resizeMode="contain" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={placeholder.toLowerCase().includes("email") ? "none" : "sentences"}
        keyboardType={placeholder.toLowerCase().includes("email") ? "email-address" : "default"}
        className="flex-1 py-4 text-base text-gray-900"
      />
    </View>
  </View>
);

const Login = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { signIn } = useAuth(); // 👈 من AuthProvider
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignIn = async () => {
    if (!email.trim() || !password) {
      Alert.alert("Missing fields", "Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      const { error } = await signIn(email.trim(), password);

      if (error) {
        Alert.alert("Login failed", error.message ?? "Invalid credentials");
        return;
      }

      // ✅ التنقل يصير تلقائي عبر RootNavigator لما user يتغيّر
      // لكن لو تبي تجبره مباشرة:
      // @ts-ignore
      navigation.reset({ index: 0, routes: [{ name: "App" }] });
    } catch (err: any) {
      Alert.alert("Error", err?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white"
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-evenly",
          paddingVertical: 90,
        }}
        className="px-6"
      >
        <View className="items-center">
          {/* Illustration */}
          <Image
            source={require("../../assets/onboarding/illustration.png")}
            className="w-full h-96"
            resizeMode="contain"
          />
        </View>

        <View>
          {/* Inputs */}
          <Input
            icon={require("../../assets/icons/eMail1.png")}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            icon={require("../../assets/icons/coverdPassword.png")}
            placeholder="Password"
            secure
            value={password}
            onChangeText={setPassword}
          />

          {/* Forgot password */}
          <Pressable onPress={() => navigation.navigate("ForgotPassword" as never)}>
            <Text className="text-center mt-4 mb-4 text-teal-400">
              {t("forgot_password")}
            </Text>
          </Pressable>

          {/* Sign In button */}
          <PrimaryButton
            title={loading ? t("loading") : t("sign_in")}
            onPress={onSignIn}
            
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
