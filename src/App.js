import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './navigators/Root';
import CounterProvider from './screens/HomeScreen/CounterProvider';

const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
export default App;
