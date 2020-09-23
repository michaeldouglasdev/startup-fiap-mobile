import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';

import { StatusBar, Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#025891" />
      <Routes />
    </>
  )
}

export default App;