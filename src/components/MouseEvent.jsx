import { StyleSheet, Text, View } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const MouseEvent = () => {
  const startingPosition = 100;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      pressed.value = true;
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      x.value = withTiming(startingPosition);
      y.value = withTiming(startingPosition);
    },
  });
  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [
        { translateX: x.value },
        { translateY: y.value },
        { scale: withSpring(pressed.value ? 1.2 : 1) },
      ],
    };
  });

  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        style={[styles.gestureView]}
        onGestureEvent={eventHandler}>
        <Animated.View style={[styles.ball, uas]} />
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};
export default MouseEvent;

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  gestureView: {
    backgroundColor: 'blue',
  },
});
