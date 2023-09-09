import { Animated, Text, View, Image, Easing, StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import { useTailwind } from "tailwind-rn/dist";

//components
import Campaigns from "./campaigns";

export default Shop = ({ navigation }) => {

  const {height, width} = Dimensions.get("window");
  const tailwind = useTailwind();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "start",
    },
  });
  return (
    <View style={styles.container}>
      <Image 
             source = {require("../assets/pokemonshop-header.png")}
             style={tailwind(`width-[${width}] height-[270] top-10`)}
      />
      <Campaigns/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};
