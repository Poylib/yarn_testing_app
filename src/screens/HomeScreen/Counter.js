import React from 'react';
import { Button, Text, View } from 'react-native';
import { useCounterContext } from '../../context/CounterContext';
import { CounterActionEnum } from '../../context/CounterContext/counterContext';

export default function Counter() {
  const { state, dispatchCount } = useCounterContext();

  const handleIncrement = () => {
    dispatchCount({
      type: CounterActionEnum.INCREMENT,
    });
  };

  const handleDecrement = () => {
    dispatchCount({
      type: CounterActionEnum.DECREMENT,
    });
  };

  return (
    <View>
      <Text>state - {state.count}</Text>
      <Button title="increment" onPress={handleIncrement} />
      <Button title="decrement" onPress={handleDecrement} />
    </View>
  );
}
