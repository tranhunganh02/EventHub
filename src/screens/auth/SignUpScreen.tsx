import { View, Text, Button, SafeAreaView, Image, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { Lock, Sms, User } from 'iconsax-react-native'
import { appColors } from '../../constants/appColor'
import { appInfo } from '../../constants/appInfors'
import SocialLogin from './component/SocialLogin'
import { LoadingModal } from '../../modals'
import authenticationAPI from '../../apis/authApi'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../state/reducers/authReducer'
import {Validate} from '../../utils/validate';

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

interface ErrorMessages {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpScreen = ({ navigation }: any) => {

  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisable, setIsDisable] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    if (
      !errorMessage ||
      (errorMessage &&
        (errorMessage.email ||
          errorMessage.password ||
          errorMessage.confirmPassword)) ||
      !values.email ||
      !values.password ||
      !values.confirmPassword
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [errorMessage, values]);

  const formValidator = (key: string) => {
    const data = {...errorMessage};
    let message = ``;

    switch (key) {
      case 'email':
        if (!values.email) {
          message = `Email is required!!!`;
        } else if (!Validate.email(values.email)) {
          message = 'Email is not invalid!!';
        } else {
          message = '';
        }

        break;

      case 'password':
        message = !values.password ? `Password is required!!!` : '';
        break;

      case 'confirmPassword':
        if (!values.confirmPassword) {
          message = `Please type confirm password!!`;
        } else if (values.confirmPassword !== values.password) {
          message = 'Password is not match!!!';
        } else {
          message = '';
        }

        break;
    }

    data[`${key}`] = message;

    setErrorMessage(data);
  };


  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values };

    data[`${key}`] = value;

    setValues(data);
  };

  const handleRegister = async () => {
   if(values.email || values.password || values.confirmPassword) {
    //const api = `access/verification`;
    const api = `auth/signup`;
    setIsLoading(true);
    try {
      const res = await authenticationAPI.HandleAuthentication(
        api,

        {email: 'hunganh.dh2021@gmail.com', username: 'hung anh', password: values.password, status: Number(0), role:["ROLE_SINHVIEN"]},
        'post',
      );

      // setIsLoading(false);
      // dispatch(addAuth(res.data.metadata))
      // await AsyncStorage.setItem('auth',JSON.stringify(res.data.metadata))
      // navigation.navigate('VerificationScreen', {
      //   code: res.data.metadata.code,
      //   ...values,
      // });
      setIsLoading(false)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
   }else {
    setErrorMessage({...errorMessage, email: 'Please enter complete information' });
   }
  };

  return (
    <>
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
            onEnd={() => formValidator('email')}
          />

          <InputComponent
            affix={<Lock size={22} color={appColors.gray} />}
            value={values.password}
            placeholder='Enter password'
            onChange={val => handleChangeValue('password', val)}
            type="default"
            isPassword
            allowClear={true}
            onEnd={() => formValidator('password')}
          />

          <InputComponent
            affix={<Lock size={22} color={appColors.gray} />}
            value={values.confirmPassword}
            placeholder='Confirm your password'
            onChange={val => handleChangeValue('confirmPassword', val)}
            type="default"
            isPassword
            allowClear={true}
            onEnd={() => formValidator('confirmPassword')}
          />

        </SectionComponent>
        {errorMessage && (
          <SectionComponent>
            {Object.keys(errorMessage).map(
              (errorItem, index) =>
                errorMessage[`${errorItem}`] && (
                  <TextComponent
                    text={errorMessage[`${errorItem}`]}
                    key={`error${index}`}
                    color={appColors.danger}
                  />
                ),
            )}
          </SectionComponent>
        )}
        <SectionComponent styles={{ alignItems: 'center' }}>
          <SpaceComponent height={16} />
          <ButtonComponent
            text='Sign Up'
            type='primary'
            onPress={handleRegister}
            disabled={isDisable}
          />
        </SectionComponent>
        <SocialLogin />
        <SectionComponent>
          <RowComponent justify='center'>
            <TextComponent text="Already have an account?" />
            <ButtonComponent
              text='Login'
              type='link'
              onPress={() => {}}
            />
          </RowComponent>
        </SectionComponent>

      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  )
}

export default SignUpScreen