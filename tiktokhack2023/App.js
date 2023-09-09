import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import Landing from "../tiktokhack2023/screens/landing";
import Shop from "./screens/shop";
import CampaignPrelude from "./screens/campaignPrelude";
import ShopListing from "./screens/shoplisting";

import "./config/firebase-config";
import Login from "./components/Login";

import { useAtom } from "jotai";
import { loginAtom } from "./state";

import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

export default function App() {
  const [login, setLogin] = useAtom(loginAtom);
  const Stack = createNativeStackNavigator();

  return (
    <TailwindProvider utilities={utilities}>
      {login ?
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Landing} />
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="CampaignPrelude" component = {CampaignPrelude}/>
          <Stack.Screen name="ShopListing" component = {ShopListing}/>
        </Stack.Navigator>
      </NavigationContainer>
       :
    <Login/> 
    }
    </TailwindProvider>
  );
}
