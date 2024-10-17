import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/globalStyles'
import { ButtonComponent, CircleComponent, ContainerComponent, IconButtonComponent, RowComponent, SectionComponent, TextComponent } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, removeAuth } from '../../state/reducers/authReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { appColors } from '../../constants/appColor'
import { appInfo } from '../../constants/appInfors'
import { ArrowDown, HambergerMenu, Notification } from 'iconsax-react-native'
import { fontFamilies } from '../../constants/fontFamilies'

import Header from './component/Header'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const HomeScreen = () => {
  const dispatch = useDispatch();

  const auth = useSelector(authSelector);
  return (
    <ContainerComponent customHeader styleContainer={{backgroundColor:'#dadada'}}>
      <StatusBar barStyle={'light-content'} />
        <Header onPressHome={async () => {
          await AsyncStorage.clear();
          await GoogleSignin.signOut();
          dispatch(removeAuth({}));
        }}  />
       
        <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          paddingHorizontal: 20,
          backgroundColor: "#dadada",
        }}>
        

        </View>
    </ContainerComponent>
  )
}

export default HomeScreen