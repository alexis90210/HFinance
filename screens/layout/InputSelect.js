import { View, TextInput } from "react-native";
import Modal from "react-native-modal";

export default function InputSelect(props) {
  return (
    <View>
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
          ></TextInput>
        
    </View>
  )  
};
