/**
 *   - Profile Readonly selector
 *     Didn't allow edit form, while readonly state - true;
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
