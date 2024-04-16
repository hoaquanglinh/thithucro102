import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Cart from './Cart'
const Tab = createBottomTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Cart' component={Cart}/>
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})