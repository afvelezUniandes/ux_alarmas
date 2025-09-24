import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";

export const Sync = () => {
  return (
    <Link href="/syncAlarm">
      <Link.Trigger>
        <Ionicons name="phone-portrait-outline" size={24} color="#0C4A6E" />
      </Link.Trigger>
      <Link.Preview />
    </Link>
  );
};
