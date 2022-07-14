import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text,View,StyleSheet, ImageBackground } from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
      <ImageBackground  style={styles.backgroundImage} source={require('../assets/HortFrute.gif')}>
        </ImageBackground>
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage:{
      flex:1,
      width:400,
    }
  });