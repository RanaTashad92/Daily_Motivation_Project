import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text,Alert, TouchableOpacity, Pressable } from 'react-native';
import { TextInput, Button, Title, useTheme } from 'react-native-paper';
import database from '@react-native-firebase/database';
import CryptoJS from 'crypto-js';

const Loginscreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const getDatabase = async()=>{

try {
  const data = await database().ref('details').once('value');
  const userDetails=data.val();
  if(userDetails){
    const user = Object.values(userDetails).find(
      (user)=>user.email === email
    );
    if(user)
    {
      const hashedPassword = CryptoJS.SHA256(password).toString();
      if(hashedPassword=== user.password)
      {
        Alert.alert('Login Successful', 'Welcome Back');
        navigation.navigate('Home');
      }else{
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    }
  }
} catch (error) {
  
}
  };

 
  return (
    <ImageBackground
      source={require('../images/L1.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.Title}>Daily Motivation App</Text>
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
          style={styles.Input}/>
            <Pressable onPress={()=> getDatabase()} >
            <Text style={styles.button}>Login</Text>
            </Pressable>
          <Text style={{fontSize:20,marginTop:5, textAlign:'center', color:"white", fontWeight:'bold'}}>
            OR
          </Text>
          <Pressable onPress={()=>navigation.navigate('Sign up')}>
            <Text style={styles.Signup}>Sign up</Text>
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
  button:{
    textAlign:"center", backgroundColor:"#CBC3E3", width:200,
    borderWidth:2, height:40,fontSize:20, borderRadius:10,
    color:'black',fontWeight:'bold',alignSelf:'center',paddingTop:5
  },
  Signup:{
    fontSize:20,color:'black', textAlign:"center", fontWeight:'bold'
  }
});

export default Loginscreen;
