import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  users: any[];
  error?: string;
}

export const initialState: State = {
  users: [],
};


export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => state),

  on(UserActions.loadUsersSuccess, (state, action) => ({
    ...state,
    users: action.data
  })),

  on(UserActions.loadUsersFailure, (state, action) => state),


  // on(UserActions.updateUserSuccess, (state, action) => {
  //   const usrid =  action.data.id;
  //   const userid = state.users.findIndex(user => user.id === usrid);
  //
  //   const newUsers = [...state.users];
  //   newUsers[userid] = action.data;
  //
  //   return {
  //     ...state,
  //     users: newUsers
  //   }
  // }),

);

