import { Animated, Text, View, Image, Easing, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";

export default Profile = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Text>Profile Name</Text>
      <StatusBar style="auto" />
    </View>
  );
};
