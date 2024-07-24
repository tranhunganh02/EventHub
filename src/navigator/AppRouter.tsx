import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import MainNavigation from './MainNavigator'
import AuthNavigator from './AuthNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { addAuth, authSelector } from '../state/reducers/authReducer'
import { SplashScreen } from '../screens'

const AppRouter = () => {
    const {getItem, setItem} = useAsyncStorage('auth')
    const [isShowSplash, setIsShowSplash] = useState(true);
    const dispatch = useDispatch()
    const auth = useSelector(authSelector)
    
    useEffect(() => {
        checkLogin()
        const timeout = setTimeout(() => {
          setIsShowSplash(false);
        }, 1500);
    
        return () => clearTimeout(timeout);
      }, [])
    
      const checkLogin = async () => { 
        const data = await getItem()
        data && dispatch(addAuth(JSON.parse(data)))
        console.log("data da dang nhap truoc do",data);
        
       // token && setAccessToken(token)       
    }
      
  return (
    <>
     {
       isShowSplash ? <SplashScreen /> : auth.accessToken ? <MainNavigation /> : <AuthNavigator />
     }
    </>
  )
}

export default AppRouter