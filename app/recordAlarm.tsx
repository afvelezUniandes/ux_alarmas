import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function RecordAlarmScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Ícono del micrófono */}
      <ThemedView style={styles.micContainer}>
        <Ionicons name="mic" size={120} color="#007BFF" />
        <ThemedText style={styles.waveText}>- - | - -</ThemedText>
      </ThemedView>

      {/* Texto descriptivo */}
      <ThemedText style={styles.description}>
        Configura la alarma de las 5:30 a.m. con la canción{" "}
        <ThemedText style={styles.bold}>milagros de Karol G</ThemedText> y con
        aviso de linterna intermitente.
      </ThemedText>

      {/* Botón cancelar */}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.back()}
      >
        <ThemedText style={styles.cancelButtonText}>Cancelar</ThemedText>
      </TouchableOpacity>
      <Link href="/recordAlarmCheck" asChild>
        <TouchableOpacity style={styles.cancelButton}>
          <ThemedText style={styles.cancelButtonText}>Guardar</ThemedText>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 40,
  },
  micContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 30,
    padding: 30,
  },
  waveText: {
    marginTop: 16,
    fontSize: 24,
    color: "#007BFF",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#0C0C0C",
    textAlign: "center",
    lineHeight: 22,
  },
  bold: {
    fontWeight: "700",
  },
  cancelButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
