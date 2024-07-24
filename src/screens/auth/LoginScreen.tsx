import { View, Text, Button, SafeAreaView, Image, Switch, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { Lock, Sms } from 'iconsax-react-native'
import { appColors } from '../../constants/appColor'
import { appInfo } from '../../constants/appInfors'
import SocialLogin from './component/SocialLogin'
import authenticationAPI from '../../apis/authApi'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../state/reducers/authReducer'
import { Validate } from '../../utils/validate'

const LoginScreen = ({navigation} : any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [isDisable, setIsDisable] = useState(true);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const emailValidation = Validate.email(email);
    if (emailValidation) {
      try {
        const res = await authenticationAPI.HandleAuthentication(
          'access/login',
          {email, password},
          'post',
        );
        console.log(res.data);
        
        dispatch(addAuth(res.data.metadata));

        await AsyncStorage.setItem(
          'auth',
          isRemember ? JSON.stringify(res.data.metadata) : email,
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Email is not correct!!!!');
    }
  };
  return (
    <ContainerComponent  isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: appInfo.sizes.HEIGHT * 0.05,
        }}
      >
        <Image source={require('../../assets/images/text-logo.png')}
          style={{
            width: appInfo.sizes.WIDTH * 0.52,
            height: appInfo.sizes.HEIGHT * 0.17,
            marginBottom: 10
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent text='Login' size={24} title />
        <SpaceComponent height={20} />
        <InputComponent
          affix={<Sms size={22} color={appColors.gray} />}
          value={email}
          placeholder='Enter your email'
          onChange={val => setEmail(val)}
          type="email-address"
          allowClear={true}
        />
        <InputComponent
          affix={<Lock size={22} color={appColors.gray} />}
          value={password}
          placeholder='Enter your password'
          isPassword={true}
          onChange={val => setPassword(val)}
        />
        <RowComponent justify='space-between'>
          <RowComponent>
            <Switch
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
              trackColor={{ true: appColors.primary, false: appColors.white }}
            />
            <TextComponent text=' Remember me' />
          </RowComponent>
          <ButtonComponent
            text='Forgot Password?'
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
            type='text'
          />
        </RowComponent>
      </SectionComponent>
      <SectionComponent styles={{alignItems:'center'}}>
        <SpaceComponent height={16} />
        <ButtonComponent
          text='Login'
          type='primary'
          //disable={isDisable}
          onPress={handleLogin}
        />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text="Don't have an account?" />
          <ButtonComponent
            text='Sign Up'
            type='link'
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}

export default LoginScreen