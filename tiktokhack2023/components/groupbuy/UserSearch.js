import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

import UserAdder from './UserAdder';

import { useTailwind } from 'tailwind-rn/dist';
import {useAtom} from "jotai";

import {friendListAtom} from "../../state/index";

//fetch users here

const UserSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useAtom(friendListAtom);
    const [searchResults, setSearchResults] = useState(users);

    const tailwind = useTailwind();
   
    const handleInputChange = (text) => {
    if (text.length==0){
            setSearchResults(users);
            setSearchText(text);
            return;
    }
      const searchedUsers = users.filter(el => el.name.toLowerCase().includes(text.toLowerCase()))
      setSearchResults(searchedUsers);
      setSearchText(text);
    };
  

    const handleSearch = () => {
      if (searchText.length==0){
        setSearchResults(users);
        return;
      }
      const searchedUsers = users.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase()))
  
      setSearchResults(searchedUsers);
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search users"
          value={searchText}
          onChangeText={handleInputChange}
        />
        <View style={tailwind("flex flex-row justify-center")}>
            <TouchableOpacity onPress={handleSearch} style={tailwind(`bg-red-tiktok py-2 px-4 flex justify-center items-center rounded w-1/2`)}>
                <Text style={tailwind(`text-white`)}>Search</Text>
            </TouchableOpacity>
        </View>

        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          style={tailwind(`top-3`)}
          renderItem={({ item }) => (
            <View style={styles.userItem} key={item.name}>
              <Text>{item.name}</Text>
              <UserAdder userId={item.id}/>
            </View>
          )}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    userItem: {
      padding: 8,
      borderWidth: 1,
      borderColor: 'lightgray',
      marginBottom: 8,
      borderRadius: 5,
      flex:1,
      flexDirection: "row",
      justifyContent: "space-between"
    },
  });

export default UserSearch;