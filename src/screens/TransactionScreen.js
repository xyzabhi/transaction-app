import { StatusBar } from "expo-status-bar";
import transactions from "../../data/transactionData";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ListItem from "../components/ListItem";

export default function TransactionScreen() {
  const allListItems = transactions.map((item) => {
    return <ListItem item={item} />;
  });
  return (
    <View>
      <Text style={styles.header}>Transaction History</Text>
      <ScrollView>{allListItems}</ScrollView>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 25,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#373558",
    fontSize: 22,
    marginBottom: 25,
  },
});
