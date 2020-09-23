import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import JobsPage from '../pages/Jobs';
import JobPage from '../pages/Job';

const Stack = createStackNavigator();

const JobsRoutes = (props) => {
  console.log("jobsRoutes", props);
  return (
  <Stack.Navigator headerMode="screen" screenOptions={{ title: null}}>
    <Stack.Screen name="Jobs" component={JobsPage} ></Stack.Screen>
    <Stack.Screen name="Job" component={JobPage} options={{}}></Stack.Screen>
  </Stack.Navigator>
)}

export default JobsRoutes;