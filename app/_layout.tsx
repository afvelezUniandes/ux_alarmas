import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="recordAlarm" options={{ headerShown: false }} />
        <Stack.Screen
          name="recordAlarmCheck"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="syncAlarm" options={{ headerShown: false }} />
        <Stack.Screen name="syncAlarmCheck" options={{ headerShown: false }} />
        <Stack.Screen name="statsAlarm" options={{ headerShown: false }} />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
