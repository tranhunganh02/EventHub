import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ExplorerTabNavigator from './ExplorerTabNavigator';
// import DrawerCustom from '../components/DrawerCustom';
import TabNavigator from './TabNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  const TestScreen: React.FC = () => {
    return (
      <View
      style={{justifyContent: 'center', flex:1}}
      >
       <Text> Hello</Text>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
      }}
      //drawerContent={props => <DrawerCustom {...props} />}
      >
      <Drawer.Screen name="HomeNavigator" component={TabNavigator} />
      <Drawer.Screen name="test" component={TestScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;