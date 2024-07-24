import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColor'
import { fontFamilies } from '../../../constants/fontFamilies'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome'
import authenticationAPI from '../../../apis/authApi'
import { addAuth } from '../../../state/reducers/authReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
GoogleSignin.configure({
	webClientId: "4615982941-qdn70ll57703ffaumu66kqeojkdjumql.apps.googleusercontent.com",
	iosClientId: "4615982941-km33ccenehsbbo5fuv11otmqqjv57o7j.apps.googleusercontent.com",
    scopes: ['profile', 'email']
});


const SocialLogin = () => {
    const dispatch = useDispatch();
    const handleGoogleLogin = async () => {
      
        try {
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            })
            const userInfo = await GoogleSignin.signIn()
            const res = await authenticationAPI.HandleAuthentication(
                'access/google-signin',
                userInfo.user,
                'post',
              );
              console.log(res.data);
             
            dispatch(addAuth(res.data.metadata));

            await AsyncStorage.setItem(
            'auth',
            JSON.stringify(res.data.metadata),
            );
        } catch (error) {
            console.log("e",error);
            
        }
    }
    return (
        <SectionComponent styles={{alignItems:'center', alignContent:'space-between'}}>
            <TextComponent
                text='OR'
                styles={{ textAlign: 'center', color: appColors.gray3 }}
                size={16}
                font={fontFamilies.medium} />
            <SpaceComponent height={15} />
            <ButtonComponent
                onPress={handleGoogleLogin}
                type='primary'
                
                color={appColors.white}
                textColor={appColors.text}
                text="Login with Google"
                textFont={fontFamilies.regular}
                iconFlex="left"
                icon={ 
                    <View 
                    style={{
                        width: 40, 
                        height: 40, 
                        borderRadius: 20, 
                        backgroundColor: "red",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                
                <Icon name="google"  size={25} color={"white"} style={{
                   
                }} />
                </View> }
            />
              <ButtonComponent
                type='primary'
                disabled
                color={appColors.white}
                textColor={appColors.text}
                text="Login with Facebook"
                ///textFont={fontFamilies.regular}
                iconFlex="left"
                icon={ 
                    <View 
                    style={{
                        width: 40, 
                        height: 40, 
                        borderRadius: 20, 
                        backgroundColor: "blue",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                
                <Icon name="facebook"  size={25} color={"white"} style={{
                   
                }} />
                </View> }
            />
        </SectionComponent>
    )
}

export default SocialLogin

function dispatch(arg0: any) {
    throw new Error('Function not implemented.')
}
