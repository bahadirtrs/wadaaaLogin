import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react';
import { Body } from './Components'
import { Header } from '../../components';
//components

const LogIn = ({ navigation, route }) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={20}
      behavior={Platform.OS === "ios" ? "position" : "position"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header title={'Login'} />
          <Body />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default LogIn
