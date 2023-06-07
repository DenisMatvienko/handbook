import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { CounterSchema } from 'entities/Counter';
import { counterActions, counterReducer, CounterSlice } from './CounterSlice';

const InitialState: CounterSchema = {
  value: 10,
};

describe('CounterSlice', () => {
  test('increment', () => {
    expect(counterReducer(InitialState as CounterSchema, counterActions.increment()))
      .toEqual({ value: 11 });
  });

  test('decrement', () => {
    expect(counterReducer(InitialState as CounterSchema, counterActions.decrement()))
      .toEqual({ value: 9 });
  });

  test(
    'Should work with empty state. Check default initial state in CounterSlise component',
    () => {
      expect(counterReducer(undefined, counterActions.increment()))
        .toEqual({ value: 1 });
    },
  );
});
