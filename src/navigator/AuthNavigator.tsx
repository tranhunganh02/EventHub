import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, LoginScreen, SignUpScreen, VerificationScreen } from '../screens';
import OnbroadingScreen from '../screens/auth/OnbroadingScreen';


const AuthNavigator = () => {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="OnbroadingScreen" component={OnbroadingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default AuthNavigator