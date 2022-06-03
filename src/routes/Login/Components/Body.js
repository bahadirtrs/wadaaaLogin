import { StyleSheet, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utils/theme'
// components
import { MyTextInput, TextButton, SubmitButton } from '../../../components'
import RequestManager from '../../../utils/RequestManager'
import FooterButton from '../../../components/FooterButton'
import { useNavigation } from '@react-navigation/native'

const Body = () => {
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const navigation = useNavigation()

    const LogIn = () => {
        (emailInput?.length > 5 && passwordInput?.length > 8)
            ? Alert.alert("Email : " + emailInput, "Password: " + passwordInput)
            : Alert.alert("Please enter your information", "Make sure the information entered is correct.")
    }

    const _getLogin = () => {
        RequestManager({
            method: 'POST',
            url: "",
            auth: false,
            body:{
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
            <TextButton
                title={'Forget Password?'}
                onPress={() => Alert.alert('Successful', "Your new password has been sent to your email address.")}
            />
            <SubmitButton title={'Login'} backgroundColor={colors.primaryColor} onPress={() => LogIn()} />
            <FooterButton
                onPress={() => navigation.push('Singup')}
                title={'Dont have an account?'}
                text={'Sign up now'}
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