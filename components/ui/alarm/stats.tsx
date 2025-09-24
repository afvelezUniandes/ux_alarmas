import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";

export const Stats = () => {
  return (
    <Link href="/statsAlarm">
      <Link.Trigger>
        <Ionicons name="bar-chart-outline" size={24} color="#0C4A6E" />
      </Link.Trigger>
      <Link.Preview />
    </Link>
  );
};
