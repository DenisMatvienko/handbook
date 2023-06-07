import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';

const initialState: CounterSchema = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state = initialState) => {
      state.value += 1;
    },
    decrement: (state = initialState) => {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions } = CounterSlice;
export const { reducer: counterReducer } = CounterSlice;
