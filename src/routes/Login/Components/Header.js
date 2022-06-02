import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Logo } from '../../../components'
import {colors} from '../../../utils/theme'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Logo/>
        <Text style={styles.headerTitle}> LOGIN </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primaryColor,
        paddingVertical:15,
        borderBottomRightRadius:60,
        borderBottomLeftRadius:60
    },
    headerTitle:{
        fontSize:24,
        paddingTop:40,
        color:'white',
        fontWeight:'bold'
    },
})