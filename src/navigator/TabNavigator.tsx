import { View, Text, Platform } from 'react-native'
import React, { ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens'
import ExplorerTabNavigator from './ExplorerTabNavigator'
import EventTabNavigator from './EventTabNavigator'
import MapTabNavigator from './MapTabNavigator'
import ProfileTabNavigator from './ProfileTabNavigator'
import AddNewScreen from '../screens/AddNewScreen'
import { appColors } from '../constants/appColor'
import { Calendar, Home2, Location, Map, Map1, User } from 'iconsax-react-native'
import { CircleComponent, TextComponent } from '../components'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { globalStyles } from '../styles/globalStyles'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        height: Platform.OS === 'android' ? 70 : 90,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: appColors.white,
      },
      tabBarIcon: ({ focused, color, size }) => {
        let icon: ReactNode
        color = focused ? appColors.primary : appColors.gray
        size = 26
        switch (route.name) {
          case "Explorer":
            icon = <MaterialIcons name='explore' size={size} color={color} />
            break;
          case "Map":
            icon = <Location variant='Bold' size={size} color={color} />
            break;
          case "Add":
            icon = (
              <CircleComponent
              size={45}
              styles={[{
                marginTop: Platform.OS === 'android' ? -65 : -55
              }]}
              >
                 <Icon name='plus' size={size - 10} color={appColors.white} />
              </CircleComponent>
            )
            break;
          case "Event":
            icon = <MaterialIcons name="calendar-month" size={30} color={color} />;
            break;
          case "Profile":
            icon = <Icon name='user' size={size} color={color} />
            break;
        }
        return icon
      },

      tabBarLabel: ({ focused }) =>  {
        if(route.name === "Add") return null;  // hide 'Add' tab for now
        return (
          <Text
          style={{
            fontSize:13,
            fontFamily:'AirbnbCereal_W_Lt',
            color:focused ? appColors.primary : appColors.gray
          }}
          >
            {route.name}
          </Text>
        )
      },

      tabBarLabelStyle:{
        paddingTop: -2,
        marginBottom: Platform.OS === "android" ? 10 : 0
      }

    })}>
      <Tab.Screen name="Explorer" component={ExplorerTabNavigator} />
      <Tab.Screen name="Event" component={EventTabNavigator} />
      <Tab.Screen
        name="Add"
        component={AddNewScreen}
       />
      <Tab.Screen name="Map" component={MapTabNavigator} />
      <Tab.Screen name="Profile" component={ProfileTabNavigator} />
    </Tab.Navigator>
  )
}

export default TabNavigator