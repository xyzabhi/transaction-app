import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import TransactionScreen from "./src/screens/TransactionScreen";

export default function App() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {},
});
