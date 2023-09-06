import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import Landing from "../tiktokhack2023/screens/landing";
import Profile from "../tiktokhack2023/screens/profile";

import './config/firebase-config';
import Login from "./components/Login";

import {useAtom} from "jotai";
import { loginAtom } from "./state";

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';


export default function App() {



  const [login, setLogin] = useAtom(loginAtom);
  const Stack = createNativeStackNavigator();


  return (
    <TailwindProvider utilities = {utilities}>
  {login ?   
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Landing} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
     </NavigationContainer>
    :
    <Login/> 
    }
    

    </TailwindProvider>

  );
}
