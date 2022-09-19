import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  ScrollView} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LeftNav from "./layout/nav";
import Card from "./layout/card";

const data = [
    {
        id:1,
        mois:'Bulletin du mois de OCT',
        lien:10000,
    },
    {
        id:2,
        mois:'Bulletin du mois de NOV',
        lien:15000,
    },
    {
        id:3,
        mois:'Bulletin du mois de DEV',
        lien:10000,
    },
    {
        id:4,
        mois:'Bulletin du mois de JAN',
        lien:15000,
    },
    {
        id:5,
        mois:'Bulletin du mois de FEV',
        lien:15000,
    },
    {
        id:6,
        mois:'Bulletin du mois de MAR',
        lien:15000,
    },
    {
        id:7,
        mois:'Bulletin du mois de AVR',
        lien:15000,
    },
    {
        id:8,
        mois:'Bulletin du mois de MAI',
        lien:15000,
    },
    {
        id:9,
        mois:'Bulletin du mois de JUI',
        lien:15000,
    },
    {
        id:10,
        mois:'Bulletin du mois de JUL',
        lien:15000,
    }
]

export default function BulletinsNoteApprenant({ navigation }) {


    const dataTable = (
       data.map(item => {
            return (
                <View key={item.id} style={{display:'flex',
                 marginLeft:20,borderTopWidth:1, borderColor:'transparent', 
                 
                 alignItems:'center', flexDirection:'row', flexWrap:'nowrap'}}>
                <View style={{width:300, backgroundColor:"#38383818", padding:10}}>
                    <Text style={{color:'#FFF'}}>{item.mois}</Text>
                </View>
                <View style={{width:300, backgroundColor:"#38383818", padding:10}}>
                    <Text style={{color:'green', textDecorationLine:"underline"}}>Ouvrir</Text>
                </View>

            </View>
            )
        })
    )
      
 
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
              Bulletins
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

          <ScrollView horizontal={true}>
          <View>
          <View style={{display:'flex',
          
           marginLeft:20,marginTop:20, alignItems:'center', flexDirection:'row', flexWrap:'nowrap'}}>
                <View style={{borderTopLeftRadius:9,width:300, backgroundColor:"#FFF", padding:10}}>
                    <Text>Mois</Text>
                </View>
                <View style={{borderTopRightRadius:3,width:300, backgroundColor:"#FFF", padding:10}}>
                    <Text>Lien</Text>
                </View>
                

            </View>
            <View>
            {dataTable}
            </View>
          </View>
          </ScrollView>
          
     

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
  containerTable: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});
