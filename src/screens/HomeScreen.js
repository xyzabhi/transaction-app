import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import UserAvatar from "react-native-user-avatar";
import transactions from "../../data/transactionData";
import ListItem from "../components/ListItem";

export default function HomeScreen() {
  const allListItems = transactions.map((item) => {
    return <ListItem item={item} />;
  });

  return (
    <View style={styles.container}>
      <View style={styles.greet}>
        <Text style={styles.text_greet}>Hi, Abhinav</Text>
        <UserAvatar
          size={48}
          src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg"
        />
      </View>
      <View style={styles.summary}>
        <Text style={styles.summary_text}> {"\u20B9"}19000</Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        Recent Transactions
      </Text>
      <ScrollView>{allListItems.slice(1, 5)}</ScrollView>
      <View style={styles.btn}>
        <TouchableOpacity activeOpacity={0.95} style={styles.button}>
          <Text style={styles.text}>View All Transactions</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  text_greet: {
    fontSize: 32,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  greet: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summary: {
    backgroundColor: "#009900",
    padding: 20,
    paddingBottom: 40,
    paddingTop: 40,
    borderRadius: 10,
  },
  summary_text: {
    color: "white",
    fontSize: 60,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    bottom: -130,
    marginTop: 10,
    borderColor: "#fdc886",
    borderWidth: 1,
    width: "80%",
    padding: 8,
    backgroundColor: "#fdc886",
    fontWeight: "bold",
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
  },
});
