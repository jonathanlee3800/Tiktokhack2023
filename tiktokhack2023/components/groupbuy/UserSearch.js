import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

//fetch users here

const UserSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const tailwind = useTailwind();
    // Function to handle text input changes
    const handleInputChange = (text) => {
      setSearchText(text);
    };
  
    // Function to handle the search button press
    const handleSearch = () => {
      // Perform a user search based on the searchText (you can replace this with your actual search logic)
      // For this example, we simulate a search with dummy data.
      const dummySearchResults = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
      ];
  
      setSearchResults(dummySearchResults);
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search users"
          value={searchText}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity onPress={handleSearch} style={tailwind(`bg-red-tiktok py-2 px-4 flex justify-center items-center rounded w-1/2`)}>
            <Text style={tailwind(`text-white`)}>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text>{item.name}</Text>
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
    },
  });

export default UserSearch;