import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login";
import InscriptionScreen from "./screens/inscription";
import HomeScreen from "./screens/Home";
import ConfigurationScreen from "./screens/Configuration";
import CompteGeneral from './screens/CompteGeneral';
import ApprenantParent from './screens/ApprenantParent';
import MenuApprenantParent from './screens/MenuApprenantParent';
import ResultatScolaire from './screens/ResultatScolaire';
import RSPtrimestre from './screens/RSPtrimestre';
import FraisScolaireApprenant from './screens/FraisScolaireApprenant';
import BulletinsNoteApprenant from './screens/BulletinsNoteApprenant';
import InscriptionEtablissement from './screens/InscriptionEtablissement';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={InscriptionScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Configuration"
          options={{ headerShown: false }}
          component={ConfigurationScreen}
        />
        <Stack.Screen
          name="CompteGeneral"
          options={{ headerShown: false }}
          component={CompteGeneral}
        />  
        <Stack.Screen
        name="ApprenantParent"
        options={{ headerShown: false }}
        component={ApprenantParent}
      />  

       <Stack.Screen
        name="MenuApprenantParent"
        options={{ headerShown: false }}
        component={MenuApprenantParent}
      />  
      <Stack.Screen
        name="ResultatScolaire"
        options={{ headerShown: false }}
        component={ResultatScolaire}
      />  
      <Stack.Screen
        name="RSPtrimestre"
        options={{ headerShown: false }}
        component={RSPtrimestre}
      />  
      <Stack.Screen
        name="FraisScolaireApprenant"
        options={{ headerShown: false }}
        component={FraisScolaireApprenant}
      /> 
      <Stack.Screen
        name="BulletinsNoteApprenant"
        options={{ headerShown: false }}
        component={BulletinsNoteApprenant}
      />  
       <Stack.Screen
        name="InscriptionEtablissement"
        options={{ headerShown: false }}
        component={InscriptionEtablissement}
      />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}