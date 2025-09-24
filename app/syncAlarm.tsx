import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import BackgroundWrapper from "@/components/ui/backgroundWrapper";
import { router } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

const devices = [
  "Alexa de Andrés",
  "TV de Juan",
  "Google Cast de Dora Nubia",
  "JBL de Jaime",
];

export default function SyncAlarmScreen() {
  return (
    <BackgroundWrapper>
      <ThemedView style={styles.container}>
        {/* Card con título y lista */}
        <View style={styles.card}>
          <ThemedText style={styles.title}>
            Elige el dispositivo a sincronizar
          </ThemedText>
          <FlatList
            data={devices}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.deviceItem}
                onPress={() => router.push("/syncAlarmCheck")}
              >
                <ThemedText style={styles.deviceText}>{item}</ThemedText>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Botón volver */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ThemedText style={styles.backButtonText}>Volver</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "transparent",
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginTop: 120,
  },
  title: {
    marginVertical: 50,
    fontSize: 20,
    fontWeight: "700",
    color: "#0C4A6E",
  },
  deviceItem: {
    paddingVertical: 12,
  },
  deviceText: {
    fontSize: 18,
    color: "#0C4A6E",
  },
  backButton: {
    alignSelf: "center",
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 40,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
