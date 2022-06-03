import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/theme'

const FooterButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress} >
            <Text style={styles.title}>{props.title} </Text>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default FooterButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.primaryColor
    },
    text: {
        color: colors.primaryColor
    }
})