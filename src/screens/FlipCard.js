import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import NumberLine from '../components/NumberLine';

export default function FlipCard() {
  const [inputWidth, setInputWidth] = useState(0);
  const { width } = useWindowDimensions();
  const spin = useSharedValue(0);
  const cardLayout = useMemo(() => {
    return {
      position: 'absolute',
      backfaceVisibility: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      width: width - 48,
      height: 300,
      borderWidth: 2,
      borderRadius: 16,
      borderColor: '#eee',
    };
  }, []);

  const onFlip = () => {
    spin.value = spin.value ? 0 : 1;
  };

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinValue}deg`, { duration: 300 }),
        },
      ],
    };
  }, []);

  const backAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinValue}deg`, { duration: 300 }),
        },
      ],
    };
  }, []);
  console.log('render');
  return (
    <SafeAreaView>
      <View style={{ height: 50 }} />
      <View style={styles.container}>
        <Pressable style={[{ zIndex: 10 }, cardLayout]} onPress={onFlip} />
        <Animated.View style={[styles.front, cardLayout, frontAnimatedStyle]}>
          <Text style={styles.cardText}> {'>Front<'}</Text>
        </Animated.View>
        <Animated.View style={[styles.back, cardLayout, backAnimatedStyle]}>
          <Text style={styles.cardText}> {'>Back<'}</Text>
        </Animated.View>
      </View>
      <View>
        <Button title="onFlip" onPress={onFlip} />
      </View>
      <NumberLine />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 300,
  },
  cardText: {
    fontSize: 22,
    color: '#fff',
  },
  front: {
    backgroundColor: '#cfb4b4',
  },
  back: {
    backgroundColor: '#89c296',
  },
  fakeView: {
    zIndex: 100,
  },
});
