import { StyleSheet, Image } from 'react-native'
import React from 'react'

const Logo = ()=> <Image style={styles.logo} source={require('../assets/img/logo.png')} />

export default Logo

const styles = StyleSheet.create({
    logo:{
       marginTop:20
    },
})