/**
 *     Profile errors selector
 *      - get code of errors, from field which contain array of errors if they catch;
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
