import { Tabs } from "expo-router";
import TabIcon from "@/components/TabIcons";

export default function TabsLayout() {
  return (
  <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      tabBarStyle: {
        position: "absolute",
        bottom: 36,
        left: 20,
        right: 20,
        height: 52,
        backgroundColor: "#0A0818", // Slightly lighter than original
        borderRadius: 30,
        overflow: "hidden",
        elevation: 25,
        shadowColor: "#8b5cf6",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.4,
        shadowRadius: 25,
        borderWidth: 1,
        borderColor: "rgba(139, 92, 246, 0.2)", // Subtle purple border
      },
    }}
  >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="home" title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="search" title="Search" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="user" title="Profile" />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: "Save",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="bookmark" title="Save" />
          ),
        }}
      />
    </Tabs>
  );
}
