import { StyleSheet, View, Alert, Text } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utils/theme'
import { useNavigation } from '@react-navigation/native'
// components
import { MyTextInput, SubmitButton } from '../../../components'
import FooterButton from '../../../components/FooterButton'

const Body = () => {
    const [name, setName] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [passwordRepeatInput, setPasswordRepeatInput] = useState('')
    const navigation = useNavigation()

    const signUp = () => {
        (emailInput?.length > 5 && name?.length > 8)
            ? passwordInput?.length == passwordRepeatInput?.length
                ? Alert.alert("Name : " + name, "Email: " + emailInput)
                : Alert.alert("Passwords Do Not Match", "Please check the password and password repetition field")
            : Alert.alert("Please enter your information", "Make sure the information entered is sufficient.")
    }

    const _getSignUp = () => {
        RequestManager({
            method: 'POST',
            url: "",
            auth: false,
            body:{
                name:name,
                email:emailInput,
                password:passwordInput
            },
            response: (result, statusCode) => {
                if (statusCode == 200) {
                    console.log(JSON.stringify(result));
                }else{
                    console.log(result.error);
                }
            }
        });
    }

    return (
        <View style={styles.bodyContainer} >
            <MyTextInput
                value={name}
                onChangeText={(term) => setName(term)}
                placeholder={'Name or Surname'}
                iconSource={require('../../../assets/icon/username.png')}
                secureTextEntry={false}
            />
            <MyTextInput
                value={emailInput}
                onChangeText={(term) => setEmailInput(term)}
                placeholder={'Email Adress'}
                iconSource={require('../../../assets/icon/mail.png')}
                secureTextEntry={false}
            />
            <MyTextInput
                value={passwordInput}
                onChangeText={(term) => setPasswordInput(term)}
                placeholder={'Password'}
                iconSource={require('../../../assets/icon/pass.png')}
                secureTextEntry={true}
            />
            <MyTextInput
                value={passwordRepeatInput}
                onChangeText={(term) => setPasswordRepeatInput(term)}
                placeholder={'Password Repeat'}
                iconSource={require('../../../assets/icon/pass.png')}
                secureTextEntry={true}
            />

            <SubmitButton title={'Sign Up'} backgroundColor={colors.primaryColor} onPress={() => signUp()} />

            <FooterButton
                onPress={() => navigation.push('Login')}
                title={'Already have an account?'}
                text={'Sign in now'}
            />
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    bodyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
})