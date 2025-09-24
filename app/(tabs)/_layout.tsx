import { HapticTab } from "@/components/haptic-tab";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "#f2f2f2",
        },
        tabBarActiveTintColor: "#0C4A6E",
        tabBarInactiveTintColor: "#0C4A6E",
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Alarma",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.iconContainerActive,
              ]}
            >
              <Ionicons name="alarm-outline" size={22} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="worldClock"
        options={{
          title: "Reloj mundial",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.iconContainerActive,
              ]}
            >
              <Ionicons name="globe-outline" size={22} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="stopWatch"
        options={{
          title: "Cronómetro",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.iconContainerActive,
              ]}
            >
              <Ionicons name="watch-outline" size={22} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="timer"
        options={{
          title: "Temporizador",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.iconContainerActive,
              ]}
            >
              <Ionicons name="hourglass-outline" size={22} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 58,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  iconContainerActive: {
    backgroundColor: "#3AB8C4",
  },
});
