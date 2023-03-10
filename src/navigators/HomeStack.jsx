import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen //
        name="Stack"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
