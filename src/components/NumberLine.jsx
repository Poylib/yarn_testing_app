import React, { useRef } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function NumberLine() {
  const numberRef = useRef(0);
  const lineWidth = useSharedValue('0%');
  const handleTextChange = text => {
    numberRef.current = text;
    if (text.length > 7) {
      lineWidth.value = '100%';
    } else lineWidth.value = '0%';
  };

  const underlineStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(lineWidth.value, { duration: 100 }),
    };
  });
  return (
    <>
      <View style={{ paddingLeft: 24 }}>
        <TextInput
          keyboardType="number-pad"
          onChangeText={handleTextChange}
          returnKeyType="done"
        />
      </View>
      <Animated.View
        style={[
          {
            marginLeft: 24,
            height: 4,
            backgroundColor: 'red',
          },
          underlineStyle,
        ]}
      />
      <Pressable onPress={() => console.log(numberRef.current)}>
        <Text>제출</Text>
      </Pressable>
    </>
  );
}
