import { createContext } from 'react';

export const CounterActionEnum = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export const CounterContext = createContext();

CounterContext.displayName = 'CounterContext';
