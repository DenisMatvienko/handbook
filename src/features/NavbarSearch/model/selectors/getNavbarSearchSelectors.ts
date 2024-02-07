/**
 *     getNavbarSearchSelector
 *
 *      @param articleList;
 *          - Get list of article when searched;
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getNavbarSearchSelector = (state: StateSchema) => state.navbarSearch?.articleList;
