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
//import Modal from "react-native-modal";

export default function InscriptionEtablissement({ navigation }) {
  const [ecole, setEcole] = useState("");
  const [classe, setClasse] = useState("");
  const [isVisible,setVisible] = useState(false);
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
               
                marginLeft: 40,
                color: "#FFF",
              }}
            >
              Inscription a un Etablissement
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
            Pour quel Etablissement souhaitez-vous prendre l'inscription ?
          </Text>

          <TextInput
            style={{
              height: 50,
              margin: 20,
              marginTop: 30,
              borderWidth: 0,
              padding: 10,
              backgroundColor: "#FFF",
              borderRadius: 10,
            }}
            onChangeText={setEcole}
            value={ecole}
          />


          <Text
            style={{
              fontWeight: "500",
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 20,
              marginTop: 20,
              color: "#FFF",
            }}
          >
            Pour quelle Niveau ?
          </Text>

          <TextInput
            style={{
              height: 50,
              margin: 20,
              marginTop: 30,
              borderWidth: 0,
              padding: 10,
              backgroundColor: "#FFF",
              borderRadius: 10,
            }}
            onChangeText={setClasse}
            value={classe}
          />

        <Text
            style={{
              fontWeight: "500",
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 20,
              marginTop: 20,
              color: "#FFF",
            }}
          >
            Pour quelle Branche ?
        </Text>

        <TouchableHighlight onPress={setVisible(true)}>
          Click
        </TouchableHighlight>
      <View>
      {/* <Modal isVisible={isVisible}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal> */}
    </View>


          <TextInput
            style={{
              height: 50,
              margin: 20,
              marginTop: 30,
              borderWidth: 0,
              padding: 10,
              backgroundColor: "#FFF",
              borderRadius: 10,
            }}
            onChangeText={setClasse}
            value={classe}
          />

<Text
            style={{
              fontWeight: "500",
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 20,
              marginTop: 20,
              color: "#FFF",
            }}
          >
            Pour quelle Option ?
          </Text>

          <TextInput
            style={{
              height: 50,
              margin: 20,
              marginTop: 30,
              borderWidth: 0,
              padding: 10,
              backgroundColor: "#FFF",
              borderRadius: 10,
            }}
            onChangeText={setClasse}
            value={classe}
          />

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
              marginBottom:10
            }}
            onPress={() => navigation.push("MenuApprenantParent")}
          >
            <Text style={{ fontWeight: "700" , paddingTop:8}}>Suivant</Text>
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

