import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LeftNav from "./layout/nav";
import { LinearGradient } from "expo-linear-gradient";
import Card from "./layout/card";

function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <LeftNav navigation={navigation}/>
      <View style={styles.right}>
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 10,
            }}
          >
            <Text  style={{
              fontWeight: "700",
              fontSize: 34,
              marginTop: 20,
              fontWeight: "700",
              marginLeft: 20,
              marginTop: 30,
              color: "#FFF",
            }}>Bonjour, Vous êtes Alexis Ngoyi</Text>
            
          </View>
          

          <Text
           style={{
            fontWeight: "700",
            fontSize: 23,
            marginVertical: 30,
            marginLeft: 20,
            color: "#FFF",
          }}
          >
            Apprenant, Parents d'Eleve
          </Text>

          <ScrollView horizontal={true}>
            <Card
            press={() => navigation.push('ApprenantParent')}
            navigation={navigation}
              label="Gestion Scolaire de l'Apprenant"
              image={require("../assets/etudiant.webp")}
            />
            <Card
            press={() => navigation.push('InscriptionEtablissement')}
              navigation={navigation}
              label="Inscription dans un etablissement"
              image={require("../assets/inscription.webp")}
              
            />
          </ScrollView>

          

          <Text
           style={{
            fontWeight: "700",
            fontSize: 23,
            marginVertical: 30,
            marginLeft: 20,
            color: "#FFF",
          }}
          >
            Reservations et Achat
          </Text>

          <ScrollView horizontal={true}>

            <Card
            press={() => null}
            navigation={navigation}
              label="Achat et vente en ligne"
              image={require("../assets/commerce.webp")}
            />

            <Card
            press={() => null}
            navigation={navigation}
              label="Reserver Mon billet de Bus"
              image={require("../assets/bus.webp")}
            />

            <Card
            press={() => null}
            navigation={navigation}
              label="Reserver Mon Taxi"
              image={require("../assets/taxi.webp")}
            />

            <Card
            press={() => null}
            navigation={navigation}
              label="Reserver une chambre d'hotel"
              image={require("../assets/hotel.webp")}
            />
          </ScrollView>

          <Text
            style={{
              fontWeight: "700",
              fontSize: 23,
              marginVertical: 30,
              marginLeft: 20,
              color: "#FFF",
            }}
          >
            Pharmacies de nuit, jour
          </Text>

          <ScrollView horizontal={true}>
            <Card
            press={() => null}
            navigation={navigation}
              label="Chercher un medicament"
              image={require("../assets/pharmacie.webp")}
            />

            <Card
            press={() => null}
            navigation={navigation}
              label="Pharmacies proche de chez vous"
              image={require("../assets/pharmacie-proche.webp")}
            />
          </ScrollView>

          <Text
            style={{
              fontWeight: "700",
              fontSize: 23,
              marginVertical: 30,
              marginLeft: 20,
              color: "#FFF",
            }}
          >
            Tontine et Loisirs
          </Text>

          <ScrollView horizontal={true}>
            <Card
            press={() => null}
            navigation={navigation}
              label="Gerer des fonds, Tontine moderne"
              image={require("../assets/argent.webp")}
            />

            <Card
            press={() => null}
            navigation={navigation}
              label="Lieux, Places publiques"
              image={require("../assets/place.jpg")}
            />

          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;

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

  welcome: {
    fontWeight: "700",
    fontSize: 28,
    marginTop: 20,
    marginBottom: 10,
    width: 250,
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
    width: 50,
    position: "relative",
    top: 5,
    height: 2,
    marginHorizontal: 9,
    backgroundColor: "#fff",
  },

  linearGradient: {
    borderRadius: 10,
    width: 130,
    position: "absolute",
    height: 130
  },
});
