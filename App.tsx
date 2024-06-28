import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screens'
import AuthNavigator from './src/navigator/AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import MainNavigation from './src/navigator/MainNavigation'

const App = () => {

  const [isShowSplashScreen, setShowSplashScreen] = useState(true)
  const [accessToken, setAccessToken] = useState('')

  const {getItem, setItem} = useAsyncStorage('assetToken')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplashScreen(false)
    }, 1500)

    return () =>
      clearTimeout(timeout)

  }, [])

  useEffect(() => {
    checkLogin()
  }, [])

  const checkLogin = async () => { 
    const token = await getItem()

    token && setAccessToken(token)
    
  }
  return (
    <>
      <StatusBar 
      barStyle='dark-content'
      backgroundColor="transparent"
      translucent
      />
        {
          isShowSplashScreen ? 
          (
            <SplashScreen />
          ) :
          (
            <NavigationContainer>
            { accessToken ? <MainNavigation/> : <AuthNavigator />}
            </NavigationContainer>
          )}

    </>
  )
}

export default App