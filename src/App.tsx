import React, { FC } from 'react'
import { LogBox, StatusBar, useColorScheme } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import './i18n'
import Navigation from './navigation/Navigation'
import { persistor, store } from './redux'
import { getThemeConfig, themes } from './theme/tokens'

LogBox.ignoreLogs([
  // Third party library using AsyncStorage from react-native
  'AsyncStorage has been extracted from react-native',
])

const App: FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const theme = getThemeConfig(themes.light)

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Navigation />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default gestureHandlerRootHOC(App)
