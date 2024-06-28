import { View, Text, Button, SafeAreaView, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { Lock, Sms, User } from 'iconsax-react-native'
import { appColors } from '../../constants/appColor'
import { appInfo } from '../../constants/appInfors'
import SocialLogin from './component/SocialLogin'

const initValue = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  
const SignUpScreen = ({navigation}: any) => {

  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisable, setIsDisable] = useState(true);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};

    data[`${key}`] = value;

    setValues(data);
  };

  return (
    <ContainerComponent isImageBackground back>
      <SectionComponent>
        <TextComponent text='Signup' size={24} title />
        <SpaceComponent height={20} />
        <InputComponent
          affix={<User size={22} color={appColors.gray} />}
          value={values.username}
          placeholder='Enter username'
          onChange={val => handleChangeValue('username', val)}
          type="default"
          allowClear={true}
        />
       
        <InputComponent
          affix={<Sms size={22} color={appColors.gray} />}
          value={values.email}
          placeholder='Enter email'
          onChange={val => handleChangeValue('email', val)}
          type="email-address"
          allowClear={true}
        />
       
        <InputComponent
          affix={<Lock size={22} color={appColors.gray} />}
          value={values.password}
          placeholder='Enter password'
          onChange={val => handleChangeValue('password', val)}
          type="default"
          isPassword
          allowClear={true}
        />
       
        <InputComponent
          affix={<Lock size={22} color={appColors.gray} />}
          value={values.confirmPassword}
          placeholder='Confirm your password'
          onChange={val => handleChangeValue('confirmPassword', val)}
          type="default"
          isPassword
          allowClear={true}
        />
       
      </SectionComponent>
      <SectionComponent styles={{alignItems:'center'}}>
        <SpaceComponent height={16} />
        <ButtonComponent
          text='Sign Up'
          type='primary'
          onPress={() => navigation.navigate('VerificationScreen')}
        />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text="Already have an account?" />
          <ButtonComponent
            text='Login'
            type='link'
            onPress={() => { }}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}

export default SignUpScreen