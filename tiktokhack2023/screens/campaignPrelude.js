import { StyleSheet, Text, View, Image, Easing, Animated, Dimensions, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import {useState} from "react";


export default CampaignPrelude = ({navigation}) => {
    const tailwind = useTailwind();
    const {width, height} = Dimensions.get("window");

    const [pressed, setPressed] = useState(false);

    const onCollectionPress = () => {
        setPressed(true);
        navigation.navigate("Shop");
    }

    return(
        <View style={styles.container}>
            <Image 
             source = {require("../assets/pokemonlist.png")}
             style={{ width: width, height: height }}
             />
        <TouchableOpacity style = {tailwind(`w-60 h-14 py-2 bg-transparent bg-${!pressed?"transparent":"white"} absolute rounded-full flex-row justify-center items-center px-4 border-2 border-solid border-white bottom-20`)} 
        onPress = {onCollectionPress}
        >
          <Text style = {tailwind(`font-extrabold text-lg text-${!pressed?"white":"black"} relative`)}>Start Collection</Text>
          {/* <Image source = {require("../assets/tiktokshop-black.png")} style = {{height:50, width: 50}}/> */}
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    },
  });