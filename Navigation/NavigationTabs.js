import React from 'react'
import { Image, Text } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Account from '../screen/Account';
import Cart from '../screen/Cart';
import Catagories from '../screen/Catagories';
const Tab = createBottomTabNavigator();
export default function NavigationTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: { paddingBottom: 10, height: 60 },
        contentStyle: { marginBottom: 18 },
        headerShown:false
    }}
    >
        <Tab.Screen name='Home' component={Home}
            options={{
              tabBarIcon: ({focused}) => (
                <Image source={require('../assets/Home.png')} 
                style={{ width: 20, height: 20, tintColor:focused ? 'red' :'black' }}  />
              ),
            }}
        />
        <Tab.Screen name='Account' component={Account}
         options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('../assets/Account.png')} 
            style={{ width: 20, height: 20, tintColor: focused ? 'red' :'black' }} 
            />
          ),
        }}
        />
        <Tab.Screen name='Cart' component={Cart} 
         options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('../assets/Cart.png')} 
            style={{ width: 30, height: 20, tintColor: focused ? 'red' :'black' }} 
            />
          ),
        }}/>
        <Tab.Screen name='Catagories' component={Catagories} 
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('../assets/catg.png')} 
            style={{ width: 20, height: 20 , tintColor: focused ? 'red' : 'black' }} />
          ),
        }}
        />
    </Tab.Navigator>
  )
}