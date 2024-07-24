import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EventScreen from '../screens/event/EventScreen'

const EventTabNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='EventScreen' component={EventScreen} />
    </Stack.Navigator>
  )
}

export default EventTabNavigator