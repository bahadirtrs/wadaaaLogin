import { StyleSheet, TextInput,View, Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
const primaryColor ='#143267'

const MyTextInput = (props) => {
    const [passwordHide, setPasswordHide] = useState(props.secureTextEntry)

    const selectEye = ()=>{
        return passwordHide 
            ? require('../assets/icon/eye.png') 
            : require('../assets/icon/eye-line.png')
    }
    return(
        <View style={styles.container} >
            <View style={styles.textIcon} >
                <Image resizeMode='contain' source={props.iconSource} style={styles.iconStyle} />
                <TextInput {...props} secureTextEntry={passwordHide} placeholderTextColor={primaryColor} autoCapitalize='none'  style={styles.textInput} />
            </View>
            {props.secureTextEntry &&
                <TouchableOpacity onPress={()=>setPasswordHide(!passwordHide)} >
                    <Image resizeMode='contain' source={selectEye()} style={styles.iconStyle} />
                </TouchableOpacity>    
            }
        </View> 
    )
}
    

export default MyTextInput

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        borderRadius:10,
        backgroundColor:'#f1f1f1',
        margin:10,
        paddingHorizontal:10
    },
    textIcon:{
        flexDirection:'row',
        alignItems:'center'
    },
    textInput:{
        padding:20, 
        fontWeight:'bold',
        width:'85%',
    },
    iconStyle:{
        height:18,
        width:18,
        marginLeft:5
    }
})