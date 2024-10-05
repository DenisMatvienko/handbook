import { StateSchema } from 'app/provider/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollRestoration = (state: StateSchema) => state.scrollRestoration.scroll;
export const getScrollRestorationBypath = createSelector(
  getScrollRestoration,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
