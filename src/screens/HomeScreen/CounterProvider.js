import React, { useMemo, useReducer } from 'react';
import { CounterContext, counterReducer } from '../../context/CounterContext';

const CounterProvider = ({ children }) => {
  const [state, dispatchCount] = useReducer(counterReducer, { count: 0 });
  const value = useMemo(() => ({ state, dispatchCount }), [state]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
