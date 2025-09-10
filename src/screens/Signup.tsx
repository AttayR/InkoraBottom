import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  Alert,
} from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useAuth } from "../providers/AuthProvider";

const Field = ({
  placeholder,
  secure = false,
  value,
  onChangeText,
}: {
  placeholder: string;
  secure?: boolean;
  value: string;
  onChangeText: (t: string) => void;
}) => (
  <View className="w-full mb-4">
    <View className="flex-row items-center rounded-full border border-gray-200 bg-gray-50 px-5">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 py-4 text-base text-gray-900"
      />
    </View>
  </View>
);

const Signup = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const onNext = async () => {
    try {
      if (!email.trim() || !password || !confirmPassword) {
        Alert.alert("Missing fields", "Please fill all fields.");
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
        Alert.alert("Invalid email", "Please enter a valid email address.");
        return;
      }
      if (password.length < 6) {
        Alert.alert("Weak password", "Password must be at least 6 characters.");
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert("Mismatch", "Passwords do not match.");
        return;
      }

      setLoading(true);
      const { error } = await signUp(email.trim(), password);

      if (error) {
        Alert.alert("Sign up failed", error.message ?? "Unknown error");
        return;
      }
      if (error) {
        Alert.alert("Sign up failed", error.message ?? "Unknown error");
        return;
      }

      // 🔔 ملاحظة مهمة:
      // إذا كان Email Confirmation مفعّل في Supabase:
      // راح توصلك رسالة "Check your email" وما يصير تسجيل دخول مباشرة.
      Alert.alert(
        "Check your email",
        "We sent you a confirmation link. Please verify your email to continue."
      );

      // اختياري: ارجاع المستخدم لصفحة Login
      // @ts-ignore
      navigation.navigate("Login");
    } catch (err: any) {
      console.error("Sign-up error:", err);
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
        contentContainerStyle={{ paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
        className="px-5 py-36"
      >
        {/* back button space */}
        <Pressable
          className="h-6 w-6 mb-10 ml-4 "
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/icons/backArrow.png")}
            className="h-6 w-6"
          />
        </Pressable>

        {/* title and content */}
        <Text className="text-3xl font-extrabold text-slate-900 text-center pt-16">
          {t("signup_title")}
        </Text>
        <Text className="mt-3 text-center text-slate-500 pt-10">
          {t("signup_sub")}
        </Text>

        {/* fields */}
        <View className="mt-6 pt-10">
          <Field
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <Field
            placeholder="Password"
            secure
            value={password}
            onChangeText={setPassword}
          />
          <Field
            placeholder="Confirm Password"
            secure
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* زر Next */}
        <PrimaryButton title="Next" onPress={onNext} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
