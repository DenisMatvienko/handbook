// reselect:
// This function createSelector - working as useMemo. The function memoize the value
// until the value is updated. Selectors can combine in several selectors for memoizing.

import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/CounterSchema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
