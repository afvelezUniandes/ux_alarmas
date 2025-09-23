import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Svg from "../../assets/images/bg.svg";

const { width, height } = Dimensions.get("window");

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Background absoluto */}
      <Svg
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid slice"
        style={styles.background}
      />
      {/* Contenido de la app */}
      {children}
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
