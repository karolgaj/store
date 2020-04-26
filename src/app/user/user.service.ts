import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(params) {
    return of([{
      name: 'name',
      lastName: 'lastName'
    }])
  }
}
