/**
 *  - StoreDecorator
 *      Provider which include storybook component, for working with em,
 *      cause standard store gets error with storybook
 *
 *  @param ReducerList
 *      - contain type of list of reducers, from DynamicModuleLoader
 *
 *  @param DeepPartial<StateSchema>
 *      - mean that all fields in StateSchema become not necessary. So that we can set only those
 *        fields that we need for testing. Firstble, here where using default DeepPartial.
 *        But 'LoginForm.stories' in strict mode fail with error, that need add all fields
 */

import '../../../../app/styles/index.scss';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { loginReducer } from 'features/authentification/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/comments/AddCommentForm/model/slice/addCommentFormSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
