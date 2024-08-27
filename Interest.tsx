import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, TextInput, Button, Dimensions, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const Yourinterest = () => {
  const [quote, setQuote] = useState('');
  const [interest, setInterest] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(`${data.content} — ${data.author || 'Unknown'}`);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
      setQuote(`Failed to fetch quote: ${error.message}`);
    }
  };

  const handleGenerateQuote = () => {
    if (interest.trim()) {
      fetchQuote();
    } else {
      Alert.alert('Input Error', 'Please enter an interest.');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/L3.jpg')}
        style={styles.image}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
          style={styles.overlay}
        >
          <Animatable.View
            animation="fadeInDown"
            duration={2000}
            style={styles.inputContainer}
          >
            <TextInput
              style={styles.input}
              placeholder="Enter your interest"
              value={interest}
              onChangeText={setInterest}
            />
            <Button title="Get Quote" onPress={handleGenerateQuote} />
          </Animatable.View>
          {quote ? (
            <Animatable.View
              animation="fadeInUp"
              duration={2000}
              style={styles.quoteContainer}
            >
              <Text style={styles.quote}>{quote}</Text>
            </Animatable.View>
          ) : null}
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Yourinterest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  quoteContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 20,
  },
  quote: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
    lineHeight: 30,
  },
});
