import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


function LeftNav({props, navigation}){
    const [menu, setMenu] = useState(0);
    const menuPress = () => (menu == 0 ? setMenu(1) : setMenu(0));
    return (<View style={styles.left}>
        <TouchableHighlight onPress={() => menuPress} activeOpacity={0.6}>
          <Icon size={24} style={{paddingVertical:10, textAlign:'center'}} 
          color="white" name="home" />
        </TouchableHighlight>

        <View style={styles.alignRow}>
          <TouchableHighlight
            onPress={() => navigation.push('CompteGeneral')}
            activeOpacity={0.6}
            style={{marginTop: 20,}}
          >
            <View style={{ textAlign:'center', left:12}}>
            <Image
              style={{ width:27, height:27, borderRadius: 50 }}
              source={require("../../assets/photo.png")}
            />
          </View>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          style={{marginTop: 20,}}
          onPress={() => alert("Pressed!")}
          activeOpacity={0.6}
        >
          <Icon size={24} style={{paddingVertical:10, textAlign:'center'}} color="white" name="cash" />
        </TouchableHighlight>

        <TouchableHighlight
          style={{marginTop: 20,}}
          onPress={() => navigation.push('Configuration')} 
          activeOpacity={0.6}
        >
          <Icon size={24} style={{paddingVertical:10, textAlign:'center'}} color="white" name="cog" />
        </TouchableHighlight>


        <TouchableHighlight
          style={{marginTop: 20,}}
          onPress={() => alert("Pressed!")}
          activeOpacity={0.6}
        >
          <Icon size={24} style={{paddingVertical:10, textAlign:'center'}} color="white" name="person-add" />
        </TouchableHighlight>


        
      </View>)
}
export default  LeftNav;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      flexDirection: "row",
      flexWrap: "nowrap",
      backgroundColor: "#120D0D",
    },
  
    left: {
      width: 50,
      height: "92%",
      backgroundColor: "#1F1D1D",
      position: "relative",
      top: 30,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomRightRadius: 20,
      textAlign: "center",
      overflow:"scroll",
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
      marginLeft:20,
      color: "#FFF",
    },
  
    connexion: {
      fontWeight: "700",
      fontSize: 20,
      marginVertical: 40,
      marginLeft:20,
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
    signinBtn:{
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
  });
  