import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import BackgroundWrapper from "@/components/ui/backgroundWrapper";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function StatsAlarmScreen() {
  const router = useRouter();

  const bars = [60, 100, 70, 85, 50];

  return (
    <BackgroundWrapper>
      <ThemedView style={styles.container}>
        {/* Título */}
        <ThemedText type="title" style={styles.title}>
          % alarmas sin posponer
        </ThemedText>

        {/* Gráfico hecho a mano */}
        <View style={styles.chart}>
          {bars.map((value, idx) => (
            <View key={idx} style={styles.barWrapper}>
              <View style={[styles.bar, { height: `${value}%` }]} />
            </View>
          ))}
        </View>

        {/* Inputs de fechas */}
        <ThemedView style={styles.form}>
          <ThemedText style={styles.label}>
            Seleccione rango de fechas
          </ThemedText>
          <TextInput style={styles.input} placeholder="Fecha inicial" />
          <TextInput style={styles.input} placeholder="Fecha final" />
        </ThemedView>

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
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 30,
    backgroundColor: "transparent",
  },
  title: {
    color: "#0C4A6E",
    textAlign: "center",
  },
  chart: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    height: 200,
    gap: 20,
  },
  barWrapper: {
    width: 30,
    height: "100%",
    justifyContent: "flex-end",
  },
  bar: {
    width: "100%",
    backgroundColor: "#007BFF",
    borderRadius: 6,
  },
  form: {
    width: "100%",
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#0C0C0C",
  },
  input: {
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
  },
  backButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
