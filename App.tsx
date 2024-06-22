import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screens'
import AuthNavigator from './src/navigator/AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {

  const [isShowSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplashScreen(false)
    }, 1500)

    return () =>
      clearTimeout(timeout)

  }, [])

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent"/>
        {
          isShowSplashScreen ? (<SplashScreen />) :
          (<NavigationContainer>
            <AuthNavigator />
          </NavigationContainer>)
        }

    </>
  )
}

export default App