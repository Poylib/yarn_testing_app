import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Counter from './Counter';
import CounterProvider from './CounterProvider';

const HomeScreen = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
