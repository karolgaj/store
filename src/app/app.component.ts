import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {loadUsers} from "./user/user.actions";
import {getUsers} from "./user/user.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngrx';

  constructor(private store: Store) {}

  ngOnInit(): void {

    this.store.pipe(select(getUsers)).subscribe(console.log);

    this.store.dispatch(loadUsers({params: ['name']}));
  }
}
