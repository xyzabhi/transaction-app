import { StatusBar } from "expo-status-bar";
import transactions from "../../data/transactionData";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import UserAvatar from "react-native-user-avatar";

export default function ListItem(props) {
  const sign = props.item.type === "credit" ? "+" : "-";
  return (
    <View style={[styles.container, { flexDirection: "row" }]}>
      <View style={[{ flexDirection: "row" }]}>
        <UserAvatar size={50} name={props.item.Name} />
        <View
          style={
            ([styles.detail],
            { flexDirection: "column" },
            { justifyContent: "center" },
            { padding: 8 })
          }
        >
          <Text style={styles.user}>{props.item.Name}</Text>
          <Text style={styles.date}>
            {props.item.Time} {props.item.Date}
          </Text>
        </View>
      </View>
      <View style={[{ flexDirection: "column" }, { justifyContent: "center" }]}>
        <Text
          style={
            props.item.type === "debit"
              ? { color: "red", fontWeight: "bold", fontSize: 16 }
              : { color: "green", fontWeight: "bold", fontSize: 16 }
          }
        >
          {sign}
          {"\u20B9"}
          {props.item.Amount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    justifyContent: "space-between",
    padding: 5,
    backgroundColor: "#fff",
    borderBottomColor: "#eaeaea",
    borderBottomWidth: 1,
  },
  user: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    fontWeight: "bold",
    color: "#cecece",
    fontSize: 12,
  },
  amount: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
  },
});
