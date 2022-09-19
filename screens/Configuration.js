import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LeftNav from "./layout/nav";
import ListOption from './layout/ListOption';



function Configuration({ navigation }) {
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
              marginTop:10,
              marginBottom: 20
            }}
          >
            <TouchableHighlight
              onPress={() => navigation.goBack()}
              activeOpacity={0.6}
            >
              <Icon
                size={28}
                style={{
left:20,
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
                marginLeft: 70,
                color: "#FFF",
              }}
            >
              Profil d'utilisateur
            </Text>
          </View>
          <View
            style={{
              margin: 13,
              marginTop: 20,
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={require("../assets/photo.png")}
            />
            <View style={{ marginTop: 5 }}>
              <Text
                style={{
                  fontSize: 15,
                  paddingHorizontal: 25,
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                Alexis Mavy Ngoyi Moussounda
              </Text>
              <TouchableHighlight
                onPress={() => navigation.push('CompteGeneral')}
                activeOpacity={0.6}
              >
                <Text
                  style={{
                    fontSize: 13,
                    paddingHorizontal: 25,
                    fontWeight: "300",
                    color: "#fff",
                  }}
                >
                  Consulter mon Profil
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 25,
              textAlign: "center",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Compte HFinance gratuit
          </Text>

          <TouchableHighlight
            style={{
              width: "93%",
              height: 40,
              backgroundColor: "#3BE77F",
              borderRadius: 50,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              marginLeft: 13,
              marginTop: 20,
              marginBottom:10
            }}
            onPress={() => navigation.push("Home")}
          >
            <Text style={{ fontWeight: "700" , paddingTop:8}}>Passer a Premium</Text>
          </TouchableHighlight>


            <TouchableHighlight
               onPress={() => null}
               activeOpacity={0.6}>
                <ListOption title="Compte" subtitle="Voir mes abonnements"/>
            </TouchableHighlight>

            <Text style={{marginVertical:20, marginLeft:15, fontSize: 17, fontWeight: "700", color: "#fff" }}>Autres options</Text>
            
            <TouchableHighlight
               onPress={() => null}
               activeOpacity={0.6}>
                <ListOption title="Les conditions générales d’utilisation" 
                subtitle="Tout ce qu'il faut savoir"/>
            </TouchableHighlight>

            <TouchableHighlight
               onPress={() => null}
               activeOpacity={0.6}>
                <ListOption title="politique de confidentialité" 
                subtitle="Important pour vous et pour nous"/>
            </TouchableHighlight>

            <TouchableHighlight
               onPress={() => null}
               activeOpacity={0.6}>
                <ListOption title="Assistance" 
                subtitle="Notre equipe travaille H24 pour vous"/>
            </TouchableHighlight>

            <TouchableHighlight
               onPress={() => null}
               activeOpacity={0.6}>
                <ListOption title="Version Build" 
                subtitle='1.0.0'/>
            </TouchableHighlight>

            <Text style={{marginVertical:30, marginLeft:15, fontSize: 17, fontWeight: "700", color: "#fff" }}>Fin de la session</Text>
            
            <TouchableHighlight
               onPress={() => null}
               activeOpacity={0.6}>
                <ListOption title="Deconnexion" 
                subtitle="Vous etes connecte en tant que Alexis Mavy Ngoyi Moussounda"/>
            </TouchableHighlight>
            

        </ScrollView>
      </View>
    </View>
  );
}

export default Configuration;

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
