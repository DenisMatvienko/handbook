// Warning! importing from upper slice is bad move
// StateSchema was importing from upper slice, but interfaces and types has exception

import { StateSchema } from 'app/provider/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
