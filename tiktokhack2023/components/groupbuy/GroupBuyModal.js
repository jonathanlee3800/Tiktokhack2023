import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import UserSearch from "./UserSearch";


const GroupBuyModal = ({ isVisible, closeModal }) => {
  const [slideAnimation] = useState(new Animated.Value(0));
  const {height, width} = Dimensions.get("window");

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

 
  const translateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [700,0], // Adjust the 500 value to control the slide distance
  });

  return (
    <Animated.View style={[styles.modalContainer, { transform: [{ translateY }] }]}>
      <UserSearch/>
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