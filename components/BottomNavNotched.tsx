import React from "react";
import { TouchableOpacity } from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import Svg, { Path } from "react-native-svg";
import Home from "../src/screens/Home";
import Create from "../src/screens/Create";
import Settings from "../src/screens/Settings";
import Profile from "../src/screens/Profile";

const IconHome = () => (
  <Svg width={28} height={28} viewBox="0 0 24 24">
    <Path d="M3 10.5L12 3l9 7.5V21h-6v-5H9v5H4z" fill="none" stroke="#00DDD7" strokeWidth={1.8} />
  </Svg>
);
const IconSearch = () => (
  <Svg width={28} height={28} viewBox="0 0 24 24">
    <Path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" fill="none" stroke="#FFFFFF" strokeWidth={2} />
    <Path d="M21 21l-4.35-4.35" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
  </Svg>
);
const IconFilters = () => (
  <Svg width={28} height={28} viewBox="0 0 24 24">
    <Path d="M4 6h16M7 12h10M10 18h4" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
  </Svg>
);
const IconProfile = () => (
  <Svg width={28} height={28} viewBox="0 0 24 24">
    <Path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="none" stroke="#FFFFFF" strokeWidth={2} />
    <Path d="M4 21c2-3.5 5-5 8-5s6 1.5 8 5" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

// Default export: a self-contained curved bottom navigation with 4 tabs and a center Create action
export default function BottomBottomNavNotched() {
  return (
    <CurvedBottomBar.Navigator
      {...({
        type: "DOWN",
        height: 82,
        circleWidth: 64,
        circleHeight: 32,
        bgColor: "#1B2936",
        tabBarHeight: 96,
        initialRouteName: "Home",
        screenOptions: {},
        id: "bottom-bottom-notched",
        renderCircle: ({ navigate }: any) => (
          <TouchableOpacity
            onPress={() => navigate("Create")}
            activeOpacity={0.9}
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              backgroundColor: "#00DDD7",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1.5,
              borderColor: "#F5F5F5",
              marginTop: -16,
            }}
          >
            <Svg width={48} height={48} viewBox="0 0 24 24">
              <Path d="M12 5v14M5 12h14" stroke="#FFFFFF" strokeWidth={3.5} strokeLinecap="round" />
            </Svg>
          </TouchableOpacity>
        ),
        tabBar: ({ routeName, navigate }: any) => (
          <TouchableOpacity onPress={() => navigate(routeName)} style={{ paddingHorizontal: 30, paddingVertical: 18 }}>
            {routeName === "Home" && <IconHome />}
            {routeName === "Search" && <IconSearch />}
            {routeName === "Filters" && <IconFilters />}
            {routeName === "Profile" && <IconProfile />}
          </TouchableOpacity>
        ),
        // Add top outline stroke and rounded corners
        style: {
          borderTopWidth: 1.5,
          borderTopColor: "#F5F5F5",
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
        },
      } as any)}
    >
      <CurvedBottomBar.Screen name="Home" position="LEFT" component={Home} />
      <CurvedBottomBar.Screen name="Search" position="LEFT" component={Create} />
      <CurvedBottomBar.Screen name="Filters" position="RIGHT" component={Settings} />
      <CurvedBottomBar.Screen name="Profile" position="RIGHT" component={Profile} />
    </CurvedBottomBar.Navigator>
  );
}
