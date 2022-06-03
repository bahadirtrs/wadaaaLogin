import { View, StyleSheet, Text, SafeAreaView, StatusBar, Pressable, Dimensions, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import LogIn from './routes/Login'
import SingUp from './routes/Singup'
import { Header } from './components'
import { colors } from './utils/theme'


const App = () => {
    const [tabSelect, setTabSelect] = useState(true)
    return (
        <View>
            <SafeAreaView backgroundColor={colors.primaryColor} />
            <StatusBar barStyle='light-content' backgroundColor={colors.primaryColor} />
            <KeyboardAvoidingView
                keyboardVerticalOffset={20}
                behavior={Platform.OS === "ios" ? "position" : "position"}
                style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Header title={tabSelect ? 'Login' : 'Sing Up'} />
                        <View style={styles.tabContainer} >
                            <Pressable onPress={() => setTabSelect(true)}
                                style={{ borderBottomColor: colors.primaryColor, borderBottomWidth: tabSelect ? 3 : 0, padding: 10 }}  >
                                <Text style={[styles.tabTitle, {}]} > Login </Text>
                            </Pressable>
                            <Pressable onPress={() => setTabSelect(false)}
                                style={{ borderBottomColor: colors.primaryColor, borderBottomWidth: tabSelect ? 0 : 3, padding: 10 }}  >
                                <Text style={[styles.tabTitle, {}]}> Sign up </Text>
                            </Pressable>
                        </View>
                        {
                            tabSelect
                                ? <LogIn />
                                : <SingUp />
                        }
                    </View>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    )
}
export default App


const styles = StyleSheet.create({
    tabContainer: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    tabTitle: {
        fontSize: 18
    }
})