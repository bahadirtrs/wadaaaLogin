import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react';
import Header from './Components/Header'
import Body from './Components/Body'
const primaryColor ='#143267'
//components

const LogIn = () => {
  return (
    <View>
        <SafeAreaView backgroundColor={primaryColor}/>
        <StatusBar barStyle='light-content' backgroundColor={primaryColor} />
        <Header/>
        <Body/>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({})