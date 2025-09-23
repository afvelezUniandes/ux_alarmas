import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import BackgroundWrapper from "@/components/ui/backgroundWrapper";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function RecordAlarmScreen() {
  return (
    <BackgroundWrapper>
      <ThemedView style={styles.container}>
        {/* Ícono del micrófono */}
        <ThemedView style={styles.micContainer}>
          <Ionicons name="mic" size={120} color="#007BFF" />
        </ThemedView>

        {/* Waves */}
        <View style={styles.waveContainer}>
          <View style={[styles.waveBar, { height: 20 }]} />
          <View style={[styles.waveBar, { height: 40 }]} />
          <View style={[styles.waveBar, { height: 20 }]} />
          <View style={[styles.waveBar, { height: 70 }]} />
          <View style={[styles.waveBar, { height: 40 }]} />
          <View style={[styles.waveBar, { height: 20 }]} />
        </View>

        {/* Texto descriptivo */}
        <ThemedText type="title" style={styles.description}>
          Configura la alarma de las 5:30 a.m. con la canción milagros de Karol
          G y con aviso de linterna intermitente.
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
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 40,
    backgroundColor: "transparent",
  },
  micContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 30,
    padding: 30,
    backgroundColor: "transparent",
  },
  waveContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    height: 70,
    marginTop: -20,
  },
  waveBar: {
    width: 18,
    borderRadius: 3,
    backgroundColor: "#007BFF",
  },
  description: {
    fontSize: 24,
    textAlign: "center",
    lineHeight: 22,
    color: "#0C4A6E",
    fontWeight: "600",
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
