import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function RecordAlarmCheckScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      {/* Tarjeta de confirmación */}
      <ThemedView style={styles.card}>
        <ThemedText style={styles.message}>
          Se ha configurado y activado la alarma de las 5:30 a.m. con la canción{" "}
          <ThemedText style={styles.bold}>Milagros de Karol G</ThemedText> y con
          aviso de linterna intermitente
        </ThemedText>

        {/* Botones Cancelar y Aplicar */}
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => router.back()} style={styles.action}>
            <ThemedText style={styles.cancel}>Cancelar</ThemedText>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            onPress={() => router.push("/(tabs)")}
            style={styles.action}
          >
            <ThemedText style={styles.apply}>Aplicar</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#0C0C0C",
  },
  bold: {
    fontWeight: "700",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  action: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  cancel: {
    color: "#009688",
    fontSize: 16,
    fontWeight: "600",
  },
  apply: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    width: 1,
    backgroundColor: "#ddd",
  },
});
