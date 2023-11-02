/**
 *    addCommentFormSlice test
 *      - test's for addCommentFormSlice
 *
 *    @test 'setText'.
 *      - write text in state and check it
 *
 */

import { AddCommentFormSchema } from 'features/AddCommentForm';
import { addCommentFormActions, addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';

const InitialState: DeepPartial<AddCommentFormSchema> = {};

describe('addCommentFormSlice', () => {
  test('setText reducer test', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: 'hello' };
    expect(addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText('hello'),
    ))
      .toEqual({ text: 'hello' });
  });
});
