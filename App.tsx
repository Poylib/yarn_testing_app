import { Button, SafeAreaView, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
const App = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const BtnFunc = () => {
    console.log(offset.value);
    offset.value = withTiming(Math.random() * 255);
  };

  return (
    <SafeAreaView>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={BtnFunc} title="Move" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue',
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});

export default App;
