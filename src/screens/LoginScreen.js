import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Account Login</Text>
      <Text style={styles.login_detail}>
        Hey, Enter your details to get sign in to your account
      </Text>
      <TextInput style={styles.input} placeholder="Enter Username" />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password "
      />
      <TouchableOpacity activeOpacity={0.95} style={styles.button}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  login: {
    fontSize: 32,
    fontWeight: "bold",
  },
  login_detail: {
    textAlign: "center",
    fontSize: 18,
    color: "#444",
    marginBottom: 60,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 30,
    borderRadius: 5,
    borderColor: "#dadada",
    borderWidth: 1.5,
    fontWeight: "bold",
  },
  button: {
    width: 230,
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
});
