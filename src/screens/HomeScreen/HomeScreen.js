import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MouseEvent from '../../components/MouseEvent';
import MoveAnimated from '../../components/MoveAnimated';
import Animated, {
  Easing,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Counter from './Counter';
import CounterProvider from './CounterProvider';

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(1000);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 1000;
        // console.log('scrolling up');
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value &&
        event.contentOffset.y > 700
      ) {
        translateY.value = 0;
        // console.log('scrolling down');
      }

      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: e => {
      isScrolling.value = true;
    },
    onEndDrag: e => {
      isScrolling.value = false;
    },
  });

  const actionBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 500,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  return (
    <CounterProvider>
      <Animated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler}>
        <Button onPress={() => navigate('Posting')} title="goToPostingScreen" />
        <Counter />
        <View style={{ backgroundColor: '#a7A5E3', height: 700 }} />
        <View style={{ backgroundColor: '#a3e3e3', height: 700 }} />
        <View style={{ backgroundColor: '#6979BB', height: 700 }} />
        <MoveAnimated />
        <MouseEvent />
        <View style={{ height: 400 }} />
      </Animated.ScrollView>
      <Animated.View style={[styles.button, actionBarStyle]}>
        <Text style={styles.buttonText}>자세히 보기</Text>
      </Animated.View>
    </CounterProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 700,
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 45,
    left: 24,
    right: 24,
    padding: 24,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default HomeScreen;
