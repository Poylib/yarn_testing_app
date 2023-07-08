import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChartScreen from '../screens/ChartScreen';
import HomeScreen from '../screens/HomeScreen';
import FlipCard from '../screens/FlipCard';
const AnimatedStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen //
        name="FlipCard"
        component={FlipCard}
      />
    </Stack.Navigator>
  );
};

export default AnimatedStack;
