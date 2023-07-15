import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import AnimatedStack from './AnimatedStack';

const Root = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen //
        name="Home"
        component={HomeStack}
      />
      <Stack.Screen //
        name="animatedStack"
        component={AnimatedStack}
      />
    </Stack.Navigator>
  );
};

export default Root;
