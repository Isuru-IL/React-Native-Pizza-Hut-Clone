import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <ImageBackground
      source={require('../../assets/images/pizza-hut/background-img.jpg')} 
      style={styles.background}
    >

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
})