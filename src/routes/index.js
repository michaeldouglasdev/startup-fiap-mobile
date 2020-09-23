import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import JobsRoutes from './jobs.routes';
import TabsRoutes from './tabs.routes';
import JobPage from '../pages/Job';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes = (props) => {
  
  console.log("rota props", props);
  
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="App" component={TabsRoutes} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="Job" component={JobPage}></Stack.Screen>

      </Stack.Navigator>
  </NavigationContainer>
)};
/*<NavigationContainer>
    <Tab.Navigator tabBarOptions={{
      tabStyle: {alignItems: 'center', justifyContent: 'center'},
      style: {borderTopWidth: 0},
      labelStyle: {fontSize: 16},
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255,255,255,0.7)',
      activeBackgroundColor: '#158fab',
      inactiveBackgroundColor: '#158fab'}}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Jobs" component={JobsRoutes}></Tab.Screen>
      </Tab.Navigator>
  </NavigationContainer>*/ 
export default Routes;