import { createStackNavigator } from '@react-navigation/stack'
import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import HomeScreen from '../screens/HomeScreen'
import OtherScreen from '../screens/OtherScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ProductsScreen from '../screens/ProductsScreen'
import { ScreenRoute } from './routes'
import {View,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()
type Props = {}

const Stack = createStackNavigator()

export const Unauthorized: FunctionComponent<Props> = () => {
  const { t } = useTranslation()

  return (
    // <Stack.Navigator screenOptions={{ headerBackTitleVisible: false, headerShown: false, }} initialRouteName={ScreenRoute.LOGIN} >
    //   <Stack.Screen name='Products' component={ProductsScreen} />
    //   {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
    //   {/* <Stack.Screen name={ScreenRoute.LOGIN} options={{ title: t('navigation.login'), }} component={LoginScreen} /> */}
    // </Stack.Navigator>
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          height:'13%',
          paddingTop: 0,
          backgroundColor: '#000',
          position: 'absolute',
          borderTopWidth: 0,
    }}}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon:({focused})=>(<View><Image source={require('../assets/images/home.png')}/></View>)
      }}/>
      <Tab.Screen name='Products' component={ProductsScreen}/>
      <Tab.Screen name='Others' component={OtherScreen}/>
      <Tab.Screen name='Profile' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default Unauthorized
