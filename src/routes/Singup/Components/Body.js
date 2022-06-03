import { StyleSheet, View, Alert } from 'react-native'
import React,{ useState } from 'react'
import {colors} from '../../../utils/theme'
// components
import {MyTextInput, SubmitButton} from '../../../components'

const Body = () => {
    const [name, setName] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [passwordRepeatInput, setPasswordRepeatInput] = useState('')

    const signUp = () =>{
        (emailInput?.length>5 && name?.length>8)
            ? passwordInput?.length==passwordRepeatInput?.length
                ? Alert.alert("Name : "+name, "Email: "+emailInput)
                : Alert.alert("Parolalar Uyuşmuyor", "Lütfen parola ve parola tekrarı alanını kontrol ediniz")
            : Alert.alert("Lüften bilgilerinizi giriniz", "Girilen bilgilerin yeterli olduğundan emin olunuz")
    }

    const _getSignUp = ()=>{
        RequestManager({
			method: 'POST',
			url: "",
			auth: false,
			response: (result,statusCode) => {
                if(statusCode==200){
                    console.log(JSON.stringify(result));
                }
			}
		});
    }

  return (
    <View style={styles.bodyContainer} >
        <MyTextInput
            value={name}
            onChangeText= {(term)=>setName(term)}
            placeholder={'Name or Surname'}
            iconSource = {require('../../../assets/icon/username.png')}
            secureTextEntry={false}
        />
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
         <MyTextInput
            value={passwordRepeatInput}
            onChangeText= {(term)=>setPasswordRepeatInput(term)}
            placeholder={'Password Repeat'}
            iconSource = {require('../../../assets/icon/pass.png')}
            secureTextEntry={true}
        />

        <SubmitButton title={'Sign Up'} backgroundColor={colors.secondColor} onPress={()=>signUp()} />
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
    bodyContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
})