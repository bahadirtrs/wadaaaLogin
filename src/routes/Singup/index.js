
import { View,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react';
import { Body } from './Components'
import { Header } from '../../components';
//components

const SingUp = ({ navigation, route }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'position' : "position"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header title={'Sign Up'} />
          <Body/>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default SingUp

