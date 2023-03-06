import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChartScreen from '../screens/ChartScreen';
import HomeScreen from '../screens/HomeScreen';
const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen //
        name="Chart"
        component={ChartScreen}
      />
      <Stack.Screen //
        name="Event"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
