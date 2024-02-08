/**
 *     getNavbarSearchSelector
 *
 *      @param articleList;
 *          - Get list of article when searched;
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getNavbarSearchArticleSelector = (state: StateSchema) => state.navbarSearch?.search ?? '';
export const getNavbarIsLoadingSelector = (state: StateSchema) => state.navbarSearch?.isLoading || false;
export const getNavbarErrorSelector = (state: StateSchema) => state.navbarSearch?.error;
