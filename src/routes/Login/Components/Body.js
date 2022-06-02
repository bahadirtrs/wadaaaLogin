import { StyleSheet, View, Alert } from 'react-native'
import React,{ useState } from 'react'
const primaryColor ='#143267'
const secondColor ='#306fd5'
// components
import MyTextInput from '../../../components/MyTextInput'
import TextButton from '../../../components/TextButton'
import SubmitButton from '../../../components/SubmitButton'

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
        <SubmitButton title={'Login'} backgroundColor={primaryColor} />
        <SubmitButton title={'Sign Up'} backgroundColor={secondColor} />
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