import { Animated, Text, View, Image, Easing, StyleSheet, Dimensions, TouchableOpacity  } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import {useState} from "react";

import GroupBuyModal from "../components/groupbuy/GroupBuyModal";

//

export default ShopListing = ({navigation}) => {
    const {width, height} = Dimensions.get("window");
    const tailwind=useTailwind();
    const [groupBuy, setGroupBuy] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };
    
    const groupBuyHandler = () => {
        setGroupBuy(true);
        openModal();
    }
    return (
        <View style={styles.container}>
            <Image source = {require("../assets/shopItem1.png")} style={{height: height-80, width: width - 10, top:20}}/>
            <TouchableOpacity style={tailwind(`bg-red-tiktok text-white px-4 py-2 rounded absolute right-8 bottom-24`)} onPress={groupBuyHandler}>
                <Text style={tailwind(`text-white text-lg`)}>Group Buy</Text>
            </TouchableOpacity>
        {groupBuy && <GroupBuyModal isVisible={isModalVisible} closeModal={closeModal}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });