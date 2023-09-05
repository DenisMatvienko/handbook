/**
 *   - Profile Form selector
 *     Get form back after cancel;
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
