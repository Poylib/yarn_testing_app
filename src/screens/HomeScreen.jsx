import { SafeAreaView } from 'react-native';
import MouseEvent from '../components/MouseEvent';
import MoveAnimated from '../components/MoveAnimated';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <MoveAnimated />
      <MouseEvent />
    </SafeAreaView>
  );
};

export default HomeScreen;
