import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import UserSearch from "./UserSearch";

//--styles--
import {useTailwind} from "tailwind-rn/dist";

//----Global states: user Amounts etc.----
import {useAtom} from "jotai";
import {friendListAtom} from "../../state/index";


const GroupBuyModal = ({ isVisible, closeModal }) => {
  const tailwind = useTailwind();

  const [slideAnimation] = useState(new Animated.Value(0));
  const [groupBuyVisible, setGroupBuyVisible] = useState(false);
  const {height, width} = Dimensions.get("window");
  const [users, setUsers] = useAtom(friendListAtom);

  useEffect(() => {
    if (isVisible) {
      // Slide the modal up when it becomes visible
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Slide the modal down when it becomes invisible
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, slideAnimation]);

  useEffect(()=>{
    let counter = 0;
    users.forEach(el=>{
        if (el.amount>0){
            console.log(groupBuyVisible);
            setGroupBuyVisible(true);
            counter++;
            return;
        }
    });
    if(counter>0){
        return;
    }

    setGroupBuyVisible(false);

  },[users, groupBuyVisible]);

 
  const translateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [700,0], // Adjust the 500 value to control the slide distance
  });

  return (
    <Animated.View style={[styles.modalContainer, { transform: [{ translateY }] }]}>
      <UserSearch/>

      {groupBuyVisible 
      && 
      <TouchableOpacity style={tailwind("justify-center items-center bg-red-tiktok py-2 mb-2 rounded")}>
        <Text style={tailwind("text-white")}>Group Buy</Text>
      </TouchableOpacity>
      }
      <TouchableOpacity onPress={closeModal}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    position: "absolute",
    height: 500,
    width: 400
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

export default GroupBuyModal;