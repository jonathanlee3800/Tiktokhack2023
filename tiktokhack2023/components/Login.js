import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tokenAuth, setTokenAuth] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const auth = getAuth();
  const signInHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      return user;
      // ...
    })
    .then((res) => {
      const token = res.getIdToken();
      return token;
    })
    .then(token=>{
        setTokenAuth(token);
        sessionStorage.setItem("accessToken", token);
        setAuthorized(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error is ${errorCode}:${errorMessage}`);
    });

  }
  

  return (
    <View style={styles.container}>
      {authorized ? 
      <Text>Signed In</Text>
      :<View>
        <Text style={styles.header}>Login</Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            // value={email}
            autoCapitalize="none"
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            // value={password}
            secureTextEntry
        />
        <Button title="Login" onPress={signInHandler} />
      </View>}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      padding: 10,
    },
  });