import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobsPage from '../pages/Jobs';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

const TabsRoutes = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      tabStyle: {alignItems: 'center', justifyContent: 'center'},
      style: {borderTopWidth: 0},
      labelStyle: {fontSize: 16},
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255,255,255,0.7)',
      activeBackgroundColor: '#158fab',
      inactiveBackgroundColor: '#158fab'}}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Jobs" component={JobsPage}></Tab.Screen>
      </Tab.Navigator>
  )
}

export default TabsRoutes;