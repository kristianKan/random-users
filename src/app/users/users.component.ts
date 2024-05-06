import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UsersState } from './users.model';
import { User } from '../user/user.model';
import { usersSelector } from './users.selectors';
import { loadData } from './users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<UsersState>) {
    this.users$ = this.store.pipe(
      select(usersSelector),
      tap(users => console.log(users)))
  }

  ngOnInit(): void {
    this.store.dispatch(loadData());
  }
}