import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Pressable } from 'react-native';
import { TextInput, Button, Title, useTheme } from 'react-native-paper';
import Loginscreen from './components/Login';
import Signup from './components/Signup';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import Home from './components/Home';
import Dailyquote from './components/DailyQuote';
import Yourinterest from './components/Interest';

const Stack = createStackNavigator();
const App=()=>{

  return(
    <View style={{flex:1}}>
      <NavigationContainer>
<Stack.Navigator initialRouteName='Login' >
  <Stack.Screen  name='Login' component={Loginscreen}/>
  <Stack.Screen  name='Sign up' component={Signup}/>
  <Stack.Screen  name='Home' component={Home}/>
  <Stack.Screen  name='Daily Quotes' component={Dailyquote}/>
  <Stack.Screen  name='Your Interest' component={Yourinterest}/>
</Stack.Navigator>
</NavigationContainer>
    </View>
  )
}
export default App;
