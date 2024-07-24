import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from '../screens/map/MapScreen';

const MapTabNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="MapScreen" component={MapScreen} />
  
      </Stack.Navigator>
    )
}

export default MapTabNavigator