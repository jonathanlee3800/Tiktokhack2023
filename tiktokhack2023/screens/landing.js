import { StyleSheet, Text, View, Image, Easing, Animated, Dimensions, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTailwind } from "tailwind-rn/dist";
import React, { useRef, useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);


const ControlAnimation = () => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      // important for lottie
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <AnimatedLottieView source={require("../assets/animations/astronaut.json")} progress={animationProgress.current} />
  );
};

const FadeInView = (props) => {
  const fadeVal = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const scaleVal = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const fadeAnimation = Animated.timing(fadeVal, {
      toValue: 1,
      duration: 1000,
      delay: 2200,
      useNativeDriver: true,
    });

    const scaleAnimation = Animated.timing(scaleVal, {
      toValue: 1,
      duration: 1000,
      delay: 2200,
      useNativeDriver: true,
    });

    Animated.parallel([scaleAnimation, fadeAnimation]).start();
  }, [scaleVal, fadeVal]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeVal,
        transform: [{ scale: scaleVal }], // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default Landing = ({ navigation }) => {

  const {height, width} = Dimensions.get('window');
  const [buttonBg, setButtonBg] = useState("white");
  const tailwind = useTailwind();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const CollectionButtonPressHandler = () => {
    setButtonBg("slate-200");
    navigation.navigate("CampaignPrelude");
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <FadeInView
        style={{
          width: "20%",
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./bulbasaur-logo-8A27924C02-seeklogo.com.png")}
          style={{ flex: 1, resizeMode: "contain" }}
        />
      </FadeInView>
      <ControlAnimation
        style={{
          position: "absolute",
        }}
      /> */}
      {/* <StatusBar style="auto" /> */}
      {/* <ControlAnimation
        style={{
          position: "absolute",
        }}
      /> */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom: "30%", position: "relative" }}>
        {/* <LottieView
          source={require("../assets/animations/astronaut.json")}
          style={{ width: "80%", aspectRatio: 1 }}
          autoPlay
          loop
        /> */}
        <Image
        source = {require("../assets/liveStream.png")}
        style={{ width: width, height: height + 100 }}
        />
        <TouchableOpacity style = {tailwind(`w-60 h-14 py-2 bg-${buttonBg} absolute rounded-full -right-3 -bottom-[59px] flex-row justify-between items-center px-4`)} onPress = {CollectionButtonPressHandler}>
          <Text style = {tailwind("font-extrabold text-lg relative")}>Start Collection</Text>
          <Image source = {require("../assets/tiktokshop-black.png")} style = {{height:50, width: 50}}/>
        </TouchableOpacity>

      </View>
      {/* <Text onPress={() => navigation.navigate("Profile")} style={tailwind("text-blue-600")}>
        Open up App.js to start working on your app!
      </Text> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
