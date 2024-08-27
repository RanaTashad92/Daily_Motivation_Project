import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, Dimensions, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const Dailyquote = ({ navigation }) => {
  const [quote, setQuote] = useState('');

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://zenquotes.io/api/random');
      const data = await response.json();
      setQuote(data[0].q);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
    }
  };

  useEffect(() => {
    fetchQuotes();
    const intervalId = setInterval(fetchQuotes, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
            style={styles.greetingContainer}
          >
            <Text style={styles.greeting}>
              Hello, Greetings!
            </Text>
            <Text style={styles.subtitle}>
              Welcome to your daily dose of motivation
            </Text>
          </Animatable.View>
          <Animatable.View
            animation="fadeInUp"
            duration={2000}
            style={styles.quoteContainer}
          >
            <Text style={styles.quote}>
              {quote}
            </Text>
          </Animatable.View>
          <Animatable.View
            animation="fadeInUp"
            duration={2000}
            style={styles.buttonContainer}
          >
            <Pressable style={styles.button} onPress={() => navigation.navigate('Your Interest')}>
              <Text style={styles.buttonText}>Your Interest</Text>
            </Pressable>
          </Animatable.View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Dailyquote;

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
  greetingContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  greeting: {
    fontSize: 30,
    color: '#333',
    textAlign: 'center',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
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
  },
  quote: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
    lineHeight: 30,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4c669f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
