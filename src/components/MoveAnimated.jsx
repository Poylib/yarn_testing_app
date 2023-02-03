import { Button, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
const MoveAnimated = () => {
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const BtnFunc = () => {
    offset.value = withSpring(Math.random() * 255);
  };
  console.log('here');
  console.log('ggg');
  console.log('fff');
  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={BtnFunc} title="Move" />
      <View></View>
    </>
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
export default MoveAnimated;
