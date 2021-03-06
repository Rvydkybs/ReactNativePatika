import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TextBox from "../../Components/TextBox";
import firebase from "firebase/app";
import "firebase/auth";
import Btn from "../../Components/Btn";
export default function LoginScreen() {
  const [values, setValues] = useState({
    email: "",
    pwd: "",
  });

  function handleChange(text, eventName) {
    setValues((prev) => {
      return {
        ...prev,
        [eventName]: text,
      };
    });
  }

  function Login() {
    const { email, pwd } = values;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then(() => {})
      .catch((error) => {
        alert(error.message);
        // ..
      });
  }

  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>
        Login
      </Text>
      <TextBox
        placeholder="Email Address"
        onChangeText={(text) => handleChange(text, "email")}
      />
      <TextBox
        placeholder="Password"
        onChangeText={(text) => handleChange(text, "pwd")}
        secureTextEntry={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "92%",
        }}
      >
        <Btn onClick={() => Login()} title="Login" style={{ width: "48%" }} />
        <Btn
          onClick={() => navigation.navigate("Sign Up")}
          title="Sign Up"
          style={{ width: "48%", backgroundColor: "#344869" }}
        />
      </View>
    </View>
  );
}
