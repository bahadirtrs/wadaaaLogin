import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SubmitButton = (props) => {
  return (
    <TouchableOpacity 
      style={[styles.buttonContainer, { backgroundColor: props.backgroundColor }]} 
      onPress={props.onPress}
    >
      <Text style={styles.titleStyle} >{props.title}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    marginVertical: 20,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center'
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold'
  }
})