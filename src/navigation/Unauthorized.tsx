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
          height:'10%',
          backgroundColor: '#000',
          borderTopWidth: 0,
    }}}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon:({focused})=>(<View><Image source={require('../assets/images/home.png')}/></View>)
      }}/>
      <Tab.Screen name='Products' component={ProductsScreen} options={{
        tabBarIcon:({focused})=>(<View><Image source={require('../assets/images/search.png')}/></View>)
      }}/>
      <Tab.Screen name='Others' component={OtherScreen} options={{
        tabBarIcon:({focused})=>(<View><Image source={require('../assets/images/icon3.png')}/></View>)
      }}/>
      <Tab.Screen name='Profile' component={ProfileScreen} options={{
        tabBarIcon:({focused})=>(<View><Image source={require('../assets/images/home.png')}/></View>)
      }}/>
    </Tab.Navigator>
  )
}

export default Unauthorized
