import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React from "react";
import { StyleSheet } from "react-native";
import BackgroundWrapper from "./backgroundWrapper";

export default function WorkInProgress() {
  return (
    <BackgroundWrapper>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.text}>En construcción 🚧</ThemedText>
      </ThemedView>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0C4A6E",
  },
});
