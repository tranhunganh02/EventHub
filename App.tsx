import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screens'
import AuthNavigator from './src/navigator/AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import MainNavigation from './src/navigator/MainNavigator'
import AppRouter from './src/navigator/AppRouter'
import { Provider } from 'react-redux'
import store from './src/state/store'

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
      <Provider store={store}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App