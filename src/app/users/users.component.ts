import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UsersState } from './users.model';
import { User } from '../user/user.model';
import { usersSelector, selectUserById } from './users.selectors';
import { loadData, selectUser } from './users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser$: Observable<User | undefined>;

  constructor(private store: Store<UsersState>) {
    this.users$ = this.store.pipe(select(usersSelector))
    this.selectedUser$ = this.store.pipe(select(selectUserById), tap(user => console.log(user)))
  }

  selectUser(id: string) {
    this.store.dispatch(selectUser(id));
  }

  trackByFn(index: Number, user: User) {
    return user.id.value;
  }

  ngOnInit(): void {
    this.store.dispatch(loadData());
  }
}