import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { MicAlarm } from "@/components/ui/alarm/mic";
import { Ionicons } from "@expo/vector-icons";

import { Stats } from "@/components/ui/alarm/stats";
import { Sync } from "@/components/ui/alarm/sync";
import BackgroundWrapper from "@/components/ui/backgroundWrapper";
import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";

export default function AlarmScreen() {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <BackgroundWrapper>
      <ThemedView style={styles.container}>
        {/* Encabezado */}
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Todas las alarmas
          </ThemedText>
          <ThemedText type="title" style={styles.title}>
            están desactivadas
          </ThemedText>
        </ThemedView>

        {/* Fila de íconos */}
        <ThemedView style={styles.iconRow}>
          <ThemedView style={styles.iconGroup}>
            <Ionicons name="notifications-outline" size={24} color="#0C4A6E" />
            <MicAlarm />
            <Stats />
          </ThemedView>
          <ThemedView style={styles.iconGroup}>
            <Sync />
            <Ionicons name="add" size={24} color="#0C4A6E" />
            <Ionicons name="ellipsis-vertical" size={24} color="#0C4A6E" />
          </ThemedView>
        </ThemedView>

        {/* Tarjeta de alarma */}
        <ThemedView style={styles.alarmCard}>
          <ThemedText style={styles.alarmLabel}>Despertar</ThemedText>
          <ThemedView style={styles.alarmRow}>
            <ThemedText type="subtitle" style={styles.alarmTime}>
              5:30 a.m.
            </ThemedText>
            <Switch
              value={isEnabled}
              onValueChange={() => setIsEnabled(!isEnabled)}
              thumbColor={isEnabled ? "#00bcd4" : "#f4f3f4"}
              trackColor={{ false: "#767577", true: "#81d4fa" }}
            />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
    gap: 20,
    backgroundColor: "transparent",
  },
  header: {
    marginTop: 150,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  title: {
    color: "#0C4A6E",
    textAlign: "center",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 120,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  iconGroup: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: "transparent",
  },
  alarmCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  alarmLabel: {
    color: "#FF9800",
    fontSize: 14,
    fontWeight: "600",
  },
  alarmRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  alarmTime: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0C4A6E",
  },
});
