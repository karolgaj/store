import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const getUsers = createSelector(selectUserState, state => state.users)

export const getUsersError = createSelector(selectUserState, s1 => s1.error);

// store = {
//   user: {
//     users: [],
//     error: ''
//   },
//   products: {
//
//   }
// }
