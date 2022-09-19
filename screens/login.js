import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

function LoginScreen({ navigation }) {
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
            Connectez-vous pour explorer HFinance
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
            Connexion
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
            onPress={() => navigation.push("Home")}
          >
            <Text
              style={{ textAlign: "center", fontSize: 18, fontWeight: "700" }}
            >
              Se connecter
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

          <View style={{ marginTop: 30 }}>
            <Text
              style={{ textAlign: "center", color: "#fff", fontWeight: "700" }}
            >
              Se connecter avec :
            </Text>
            <View style={styles.flexRow}>
              <TouchableHighlight
                style={{ marginHorizontal: 35 }}
                onPress={() => null}
                activeOpacity={0.6}
              >
                <Icon size={33} color="white" name="logo-facebook" />
              </TouchableHighlight>
              <TouchableHighlight
                style={{ marginHorizontal: 35 }}
                onPress={() => null}
                activeOpacity={0.6}
              >
                <Icon size={33} color="white" name="logo-google" />
              </TouchableHighlight>
            </View>
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
            onPress={() => navigation.push("Register")}
          >
            <Text
              style={{ textAlign: "center", fontSize: 18, fontWeight: "700" }}
            >
              S'inscrire ici
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: "#120D0D",
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

  fieldBox: {
    marginTop: 10,
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
