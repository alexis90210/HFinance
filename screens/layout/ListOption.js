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

export default function ListOption(props) {
  return (
    <View style={{ margin: 13, marginTop: 16 }}>
      <Text style={{ fontSize: 15, fontWeight: "700", color: "#fff" }}>
        {props.title}
      </Text>
      <Text style={{marginTop:10, fontSize: 13, fontWeight: "300", color: "#fff" }}>
        {props.subtitle}
      </Text>
    </View>
  );
}
