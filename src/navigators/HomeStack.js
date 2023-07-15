import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChartScreen from '../screens/ChartScreen';
import Animated from '../screens/FlipCard';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Posting from '../screens/PostingScreen/Posting';
const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen //
        name="Event"
        component={HomeScreen}
      />
      <Stack.Screen //
        name="Chart"
        component={ChartScreen}
      />
      <Stack.Screen //
        name="Animated"
        component={Animated}
      />
      <Stack.Screen //
        name="Posting"
        component={Posting}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
