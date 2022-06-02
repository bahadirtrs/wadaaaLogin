import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import {colors} from '../utils/theme'

const TextButton = (props) =>
    <TouchableOpacity style={styles.forgetContainer} onPress={props.onPress} >
        <Text style={styles.forgetPasswordStyle}>{props.title}</Text>
    </TouchableOpacity>

export default TextButton

const styles = StyleSheet.create({
    forgetContainer:{
        width:'80%',
        alignItems:'flex-end'
    },
    forgetPasswordStyle:{
        fontSize:12,
        fontWeight:'bold',
        color:colors.primaryColor
    }
})