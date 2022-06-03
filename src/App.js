import * as React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './routes/Login'
import Singup from './routes/Singup'
import { colors } from './utils/theme'

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <SafeAreaView backgroundColor={colors.primaryColor} />
            <StatusBar barStyle='light-content' backgroundColor={colors.primaryColor} />
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Singup" component={Singup} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

