import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import LeftNav from "./layout/nav";

export default function CompteGeneral({ navigation }) {
  return (
    <View style={styles.container}>
      <LeftNav />
      <View style={styles.right}>
        <ScrollView style={styles.scrollView}>
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(27,47,227,0.4)", "transparent"]}
            style={{
              borderRadius: 10,
              width: "100%",
              height: 200,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingRight: 10,
              marginTop: 10,
              marginBottom: 20,
              position: "absolute",
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
                marginLeft: 70,
                color: "#FFF",
              }}
            >
              Alexis Mavy Ngoyi
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              height: 200,
              position: "absolute",
              top: 100,
              left: 120,
            }}
          >
            <Image
              style={{ width: 90, height: 90, borderRadius: 50 }}
              source={require("../assets/photo.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              paddingHorizontal: 25,
              fontWeight: "700",
              color: "#fff",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Alexis Mavy Ngoyi Moussounda
          </Text>

          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <TouchableHighlight
              style={{
                width: "63%",
                height: 40,
                backgroundColor: "transparent",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#fff",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                marginLeft: 13,
                marginTop: 20,
                marginBottom: 10,
              }}
              onPress={() => navigation.push("CompteGeneral")}
            >
              <Text style={{ fontWeight: "700", color: "#fff", paddingTop: 8 }}>
                Modifier le Profil
              </Text>
            </TouchableHighlight>
          </View>

          <Text
            style={{
              fontWeight: "700",
              fontSize: 20,
              marginTop: 26,
              textAlign: "center",
              color: "#FFF",
            }}
          >
            15000 XAF
          </Text>
          <View
                        style={{
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        marginTop:25
                    }}/>

                    <View style={{
                        borderRadius:10,
                        backgroundColor:'#121111',
                        padding:20,
                        marginTop:40
                    }}>
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
            <Text style={{ fontWeight: "700" , paddingTop:8}}>Effectuer un retrait</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              width: "93%",
              height: 40,
              backgroundColor: "#FFF",
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
            <Text style={{ fontWeight: "700" , paddingTop:8}}>Effectuer un depot</Text>
          </TouchableHighlight>
                    </View>

            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-end',
                paddingRight:32
            }}>
            <TouchableHighlight
            style={{
              width: 250,
              height: 40,
              backgroundColor: "#121111",
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
            <Text style={{ fontWeight: "700" , paddingHorizontal:20, paddingTop:8, color:'#FFF'}}>
                Historique des transactions
                </Text>
          </TouchableHighlight>
            </View>

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
    width: "85%",
    height: "100%",
    paddingBottom: 30,
    paddingLeft: 10,
    overflow: "hidden",
  },

  marginTop: {
    marginTop: 30,
  },
});
