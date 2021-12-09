import { createStackNavigator } from '@react-navigation/stack'
import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import HomeScreen from '../screens/HomeScreen'
import { ScreenRoute } from './routes'

type Props = {}

const Stack = createStackNavigator()

export const Authorized: FunctionComponent<Props> = () => {
  const { t } = useTranslation()

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
      initialRouteName={ScreenRoute.HOME}
    >
      <Stack.Screen
        name={ScreenRoute.HOME}
        options={{
          title: t('navigation.home'),
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}

export default Authorized
