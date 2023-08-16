/**
 *   - Profile isLoading selector
 *     Get is Loading;
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
