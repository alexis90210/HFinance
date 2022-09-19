import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Card(props, { navigation }) {
  return (
    <TouchableHighlight onPress={props.press}>
      <View style={{ margin: 13, marginTop: 16 }}>
        <Image
          style={{ width: 130, height: 130, borderRadius: 10 }}
          source={props.image}
        />
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{
            borderRadius: 10,
            width: 130,
            position: "absolute",
            height: 130,
          }}
        />
        <Text
          style={{
            marginLeft: 5,
            marginTop: 10,
            width: 120,
            fontSize: 13,
            fontWeight: "100",
            color: "#fff",
          }}
        >
          {props.label}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
