import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileScreen } from '../screens'

const ProfileTabNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        headerTitle: '',
        headerBackTitle: '',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
  
    }}>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
    </Stack.Navigator>
  )
}

export default ProfileTabNavigator