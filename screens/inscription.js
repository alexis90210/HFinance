import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LeftNav from "./layout/nav";

function InscriptionScreen({ navigation }) {
  const [Email, onChangeEmail] = useState("");
  const [Password, onChangePassword] = useState("");

  return (
    <View style={styles.container}>
      <LeftNav />

      <View style={styles.right}>
        <ScrollView style={styles.scrollView}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 33,
              marginTop: 20,
              fontWeight: "700",
              marginLeft: 20,
              marginTop: 30,
              color: "#FFF",
            }}
          >
            Bienvenu dans HFinance
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 23,
              marginVertical: 30,
              marginLeft: 20,
              color: "#FFF",
            }}
          >
            Inscription
          </Text>

          <View style={styles.fieldBox}>
            <Text
              style={{
                fontSize: 13,
                marginLeft: 14,
                color: "#FFF",
                fontWeight: "700",
              }}
            >
              Email
            </Text>
            <TextInput
              style={{
                height: 50,
                margin: 12,
                borderWidth: 0,
                padding: 10,
                backgroundColor: "#FFF",
                borderRadius: 10,
              }}
              onChangeText={onChangeEmail}
              value={Email}
            />
          </View>

          <View style={styles.fieldBox}>
            <Text
              style={{
                fontSize: 13,
                marginLeft: 14,
                color: "#FFF",
                fontWeight: "700",
              }}
            >
              Password
            </Text>
            <TextInput
              style={{
                height: 50,
                margin: 12,
                borderWidth: 0,
                padding: 10,
                backgroundColor: "#FFF",
                borderRadius: 10,
              }}
              onChangeText={onChangePassword}
              value={Password}
            />
          </View>

          <View style={styles.fieldBox}>
            <Text
              style={{
                fontSize: 13,
                marginLeft: 14,
                color: "#FFF",
                fontWeight: "700",
              }}
            >
              Confirm Password
            </Text>
            <TextInput
              style={{
                height: 50,
                margin: 12,
                borderWidth: 0,
                padding: 10,
                backgroundColor: "#FFF",
                borderRadius: 10,
              }}
              onChangeText={onChangePassword}
              value={Password}
            />
          </View>

          <TouchableOpacity
            style={{
              width: "93%",
              height: 50,
              backgroundColor: "#3BE77F",
              borderRadius: 50,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              marginLeft: 13,
              paddingTop: 10,
              marginTop: 30,
            }}
            onPress={() => Alert.alert("Connexion pressed")}
          >
            <Text
              style={{ textAlign: "center", fontSize: 18, fontWeight: "700" }}
            >
              S'inscrire
            </Text>
          </TouchableOpacity>

          <View style={styles.flexRowMargin}>
            <View style={styles.line}></View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "700",
                color: "#FFF",
              }}
            >
              OU
            </Text>
            <View style={styles.line}></View>
          </View>

          <TouchableOpacity
            style={{
              width: "93%",
              height: 50,
              backgroundColor: "#FFF",
              borderRadius: 50,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              marginLeft: 13,
              paddingTop: 10,
              marginTop: 30,
              marginBottom:30
            }}
            onPress={() => navigation.push("Login")}
          >
            <Text
              style={{ textAlign: "center", fontSize: 18, fontWeight: "700" }}
            >
              Se connecter
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default InscriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: "#120D0D",
  },

  left: {
    width: "20%",
    height: "95%",
    backgroundColor: "#1F1D1D",
    position: "relative",
    top: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomRightRadius: 20,
    textAlign: "center",
    paddingTop: 20,
  },

  textWhite: {
    color: "#fff",
  },

  right: {
    width: "80%",
    height: "100%",
    overflow: "hidden",
  },

  marginTop: {
    marginTop: 30,
  },

  welcome: {
    fontWeight: "700",
    fontSize: 33,
    marginTop: 20,
    marginLeft: 20,
    color: "#FFF",
  },

  connexion: {
    fontWeight: "700",
    fontSize: 20,
    marginVertical: 40,
    marginLeft: 20,
    color: "#FFF",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },

  fieldBox: {
    marginTop: 10,
  },

  inputText: {
    fontSize: 13,
    marginLeft: 14,
    color: "#FFF",
  },
  signinBtn: {
    width: "93%",
    height: 40,
    backgroundColor: "#1B2FE3",
    borderRadius: 10,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    marginLeft: 13,
    marginTop: 30,
  },

  loginBtn: {
    width: "93%",
    height: 40,
    backgroundColor: "#3BE77F",
    borderRadius: 10,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    marginLeft: 13,
    marginTop: 30,
  },

  btnText: {
    fontSize: 20,
    color: "#FFF",
  },
  flexRowMargin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },

  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  line: {
    width: 90,
    position: "relative",
    top: 5,
    height: 2,
    marginHorizontal: 9,
    backgroundColor: "#fff",
  },
});
