import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react';
import { Header, Body} from './Components'
import {colors} from '../../utils/theme'
//components

const LogIn = () => {
  return (
    <View>
        <SafeAreaView backgroundColor={colors.primaryColor}/>
        <StatusBar barStyle='light-content' backgroundColor={colors.primaryColor} />
        <Header/>
        <Body/>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({})