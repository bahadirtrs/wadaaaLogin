import { StyleSheet, View, Alert } from 'react-native'
import React,{ useState } from 'react'
import {colors} from '../../../utils/theme'
// components
import {MyTextInput, TextButton, SubmitButton} from '../../../components'

const Body = () => {
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

  return (
    <View style={styles.bodyContainer} >
        <MyTextInput
            value={emailInput}
            onChangeText= {(term)=>setEmailInput(term)}
            placeholder={'Email Adress'}
            iconSource = {require('../../../assets/icon/mail.png')}
            secureTextEntry={false}
        />
        <MyTextInput
            value={passwordInput}
            onChangeText= {(term)=>setPasswordInput(term)}
            placeholder={'Password'}
            iconSource = {require('../../../assets/icon/pass.png')}
            secureTextEntry={true}
        />
        <TextButton 
            title={'Forget Password?'} 
            onPress={()=>Alert.alert('İşlem Başarılı', "Yeni şifreniz email adresinize gönderildi")} 
        />
        <SubmitButton title={'Login'} backgroundColor={colors.primaryColor} />
        <SubmitButton title={'Sign Up'} backgroundColor={colors.secondColor} />
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
    bodyContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
})