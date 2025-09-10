// components/PrimaryButton.tsx
import React from "react";
import { Text, View, Pressable, StyleProp, ViewStyle, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Expo

type Props = {
  title: string;
  onPress: () => void;
  width?: number | string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function PrimaryButton({
  title,
  onPress,
  width = 264,
  style,
  textStyle,
}: Props) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          {
            // ظل iOS
            shadowColor: "#10E6FEBE",
            shadowOpacity: 0.3,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 16 },
            // ظل Android
            elevation: 8,
            alignSelf: "center",
            marginBottom: 16,
          },
          style,
        ]}
      >
        <LinearGradient
          colors={["#00E6E6", "#00D1C7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            height: 48,
            borderRadius: 24,
            paddingHorizontal: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={[
              { fontSize: 16, fontWeight: "700", color: "white" },
              textStyle,
            ]}
          >
            {title}
          </Text>
        </LinearGradient>
      </View>
    </Pressable>
  );
}
