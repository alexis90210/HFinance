import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LeftNav from "./layout/nav";
import Card from "./layout/card";





export default function MenuApprenantParent({ navigation }) {
  const [ecole, setEcole] = useState("");
  const [classe, setClasse] = useState("");
  return (
    <View style={styles.container}>
      <LeftNav />
      <View style={styles.right}>
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingRight: 10,
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <TouchableHighlight
              onPress={() => navigation.goBack()}
              activeOpacity={0.6}
            >
              <Icon
                size={28}
                style={{
                  left: 20,
                  position: "relative",
                  top: 30,
                }}
                color="white"
                name="arrow-back"
              />
            </TouchableHighlight>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 20,
                marginTop: 26,
                width: 250,
                marginLeft: 40,
                color: "#FFF",
              }}
            >
              Dashboard Apprenant
            </Text>
          </View>

          <Text
            style={{
              fontWeight: "700",
              fontSize: 34,
              marginTop: 20,
              fontWeight: "700",
              marginLeft: 20,
              marginTop: 30,
              color: "#FFF",
            }}
          >
            Alexis Mavy Ngoyi Moussounda
          </Text>

          <Text
            style={{
              fontWeight: "500",
              fontSize: 20,
              marginTop: 20,
              fontWeight: "700",
              marginLeft: 20,
              marginTop: 40,
              color: "#FFF",
            }}
          >
            Lycee de la reconciliation
          </Text>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 20,
              marginTop: 10,
              color: "#FFF",
            }}
          >
            Seconde C/4
          </Text>

          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              flexWrap:'wrap'
            }}
          >
            <Card
              press={() => navigation.push("ResultatScolaire")}
              navigation={navigation}
              label="Resultats Scolaire"
              image={require("../assets/resultat.webp")}
            />

            <Card
              press={() => navigation.push("FraisScolaireApprenant")}
              navigation={navigation}
              label="Frais Scolaire"
              image={require("../assets/frais.webp")}
            
            />

            <Card
              press={() => navigation.push("BulletinsNoteApprenant")}
              navigation={navigation}
              label="Bulletins"
              image={require("../assets/bulletins.webp")}
            />

            <Card
              press={() => navigation.push("ApprenantParent")}
              navigation={navigation}
              label="Absences"
              image={require("../assets/absences.webp")}
            />
          </View>

          <TouchableHighlight
            style={{
              width: "43%",
              height: 40,
              backgroundColor: "#3BE77F",
              borderRadius: 50,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              marginLeft: 20,
              marginTop: 20,
              marginBottom: 10,
            }}
            onPress={() => navigation.push("Home")}
          >
            <Text style={{ fontWeight: "700", paddingTop: 8 }}>Contacter l'ecole</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    </View>
  );
}

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
    paddingBottom: 30,
    overflow: "hidden",
  },

  marginTop: {
    marginTop: 30,
  },
});
