/**
 *     getNavbarSearchSelector
 *
 *      @param articleList;
 *          - Get list of article when searched;
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getNavbarSearchArticleSelector = (state: StateSchema) => state.navbarSearch?.search ?? '';
export const getNavbarSearchLimit = (state: StateSchema) => state.navbarSearch?.limit || 7;
export const getNavbarIsLoadingSelector = (state: StateSchema) => state.navbarSearch?.isLoading || false;
export const getNavbarErrorSelector = (state: StateSchema) => state.navbarSearch?.error;
export const getNavbarPageSelector = (state: StateSchema) => state.navbarSearch?.page || 1;
export const getNavbarHasMoreSelector = (state: StateSchema) => state.navbarSearch?.hasMore || false;
export const getNavbarSearchInited = (state: StateSchema) => state.navbarSearch?._inited;
