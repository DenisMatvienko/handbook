/**
 *     getNavbarSearchSelector
 *      - get state of navbarSearch
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getNavbarSearchSelector = (state: StateSchema) => state.navbarSearch?.articleList;
