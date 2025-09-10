// components/SecondaryButton.tsx
import React from "react";
import { Text, Pressable, StyleProp, ViewStyle, TextStyle } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  width?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function SecondaryButton({
  title,
  onPress,
  width = 264,
  style,
  textStyle,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        { 
          height: 48,
          width,
          borderRadius: 24,
          borderWidth: 1.5,
          borderColor: "#00E6E6",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginBottom: 16,
          backgroundColor: "white",
        },
        style,
      ]}
    >
      <Text
        style={[
          { fontSize: 16, fontWeight: "700", color: "#00E6E6" },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
