import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';

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
    </Stack.Navigator>
  );
};

export default Root;
