import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Pressable, Alert } from 'react-native';
import { TextInput, Button, Title, useTheme } from 'react-native-paper';
import database from '@react-native-firebase/database';
import CryptoJS from 'crypto-js';


const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const handleLogin = async () => {
    try {

      const hashedPassword = CryptoJS.SHA256(password).toString();


      const userSnapshot = await database().ref('details').orderByChild('email').equalTo(email).once('value');
      if (userSnapshot.exists()) {
        Alert.alert(
          'User Exists',
          'A user with this email already exists. Please try a different email.',
          [{ text: 'OK' }]
        );
        return;
      }


      await database().ref('details').push({
        email,
        password: hashedPassword,
        name,
      });

      Alert.alert(
        'User Registered',
        'Your account has been created successfully.',
        [{
          text: 'OK',
          onPress: () => navigation.navigate('Login')
        }]
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'An error occurred during signup. Please try again.',
        [{ text: 'OK' }]
      );
      console.log(error);
    }
  };



  return (
    <ImageBackground
      source={require('../images/L1.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.Title}>Daily Motivation App</Text>
        <Text style={styles.Title}>Signup Page</Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          style={styles.Input} />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          secureTextEntry={true}
          style={styles.Input} />
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder='Enter Your Name'
          style={styles.Input} />
        <Pressable onPress={() => handleLogin()} >
          <Text style={styles.button}>Sign up</Text>
        </Pressable>


      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 0.5,
    width: '100%',
    padding: 20,
  },
  Title: {
    fontSize: 27, textAlign: 'center', color: 'black', fontWeight: 'bold'
  },
  Input: {
    height: 50, margin: 12, borderWidth: 1, borderRadius: 4
  },
  button: {
    textAlign: "center", backgroundColor: "#CBC3E3", width: 200,
    borderWidth: 2, height: 40, fontSize: 20, borderRadius: 10,
    color: 'black', fontWeight: 'bold', alignSelf: 'center', paddingTop: 5
  },
  Signup: {
    fontSize: 20, color: 'black', textAlign: "center", fontWeight: 'bold'
  }
});

export default Signup;
