import { StateSchema } from 'app/provider/StoreProvider';

export const getScrollRestoration = (state: StateSchema) => state.scrollRestoration.scroll;
