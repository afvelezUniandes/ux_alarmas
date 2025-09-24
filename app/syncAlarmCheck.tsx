import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import BackgroundWrapper from "@/components/ui/backgroundWrapper";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function SyncAlarmCheckScreen() {
  return (
    <BackgroundWrapper>
      <ThemedView style={styles.container}>
        <View style={styles.card}>
          <ThemedText style={styles.title}>Sincronización exitosa</ThemedText>

          <TouchableOpacity onPress={() => router.back()}>
            <ThemedText style={styles.link}>Aceptar</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "transparent",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    minWidth: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0C4A6E",
    marginBottom: 20,
    textAlign: "center",
  },
  link: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007BFF",
  },
});
