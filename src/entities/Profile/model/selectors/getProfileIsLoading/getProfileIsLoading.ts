/**
 *   - Profile isLoading selector
 *     Get is Loading;
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
