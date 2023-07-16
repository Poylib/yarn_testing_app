import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import { LoginScreen } from '../screens/LoginScreen';

const Root = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen //
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen //
        name="Home"
        component={HomeStack}
      />
    </Stack.Navigator>
  );
};

export default Root;
