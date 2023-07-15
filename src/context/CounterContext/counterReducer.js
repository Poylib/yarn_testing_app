import { CounterActionEnum } from './counterContext';

export const counterReducer = (state, action) => {
  switch (action.type) {
    case CounterActionEnum.INCREMENT: {
      return {
        count: state.count + 100,
      };
    }
    case CounterActionEnum.DECREMENT: {
      return {
        count: state.count - 100,
      };
    }
    default: {
      throw new Error('Unknown type');
    }
  }
};
