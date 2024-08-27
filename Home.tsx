import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Pressable, Alert } from 'react-native';


const Home = ( {navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/L2.jpg')}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Daily Quotes') }>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop:300
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#192f6a',
    textAlign: 'center',
  },
});
