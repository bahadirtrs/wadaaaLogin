import { View,StyleSheet } from 'react-native'
import React from 'react'
import LogIn from './routes/Login'
const primaryColor ='#143267'

const App = () => {
    return (
        <View>
            <LogIn/>
        </View>
    )
}
export default App



const styles = StyleSheet.create({
    headerContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:primaryColor,
        paddingVertical:15,
        borderBottomRightRadius:60,
        borderBottomLeftRadius:60
    },
    headerTitle:{
        fontSize:24,
        paddingTop:40,
        color:'white',
        fontWeight:'bold'
    },
    bodyContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    textInput:{
        backgroundColor:'#f1f1f1',
        width:'80%',
        padding:20, 
        margin:10,
        borderRadius:10,
        fontWeight:'bold'
    },
    
})
