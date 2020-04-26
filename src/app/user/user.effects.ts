import { Injectable } from '@angular/core';
import {act, Actions, createEffect, ofType} from '@ngrx/effects';

import * as UserActions from './user.actions';
import {catchError, map, switchMap} from "rxjs/operators";
import {UserService} from "./user.service";
import {of} from "rxjs";



@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap((action) => this.userService.getUsers(action.params).pipe(
        map((res) => UserActions.loadUsersSuccess({data: res})),
        catchError(err => of(UserActions.loadUsersFailure({error: err})))
      ))
    );
  });



  constructor(private actions$: Actions, private userService: UserService) {}

}
