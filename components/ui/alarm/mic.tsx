import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";

export const MicAlarm = () => {
  return (
    <Link href="/recordAlarm">
      <Link.Trigger>
        <Ionicons name="mic-outline" size={24} color="#0C4A6E" />
      </Link.Trigger>
      <Link.Preview />
    </Link>
  );
};
