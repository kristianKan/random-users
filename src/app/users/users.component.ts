import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { State } from './users.model';
import { User } from '../user/user.model';
import { usersSelector, selectUserById } from './users.selectors';
import { loadData, selectUser, flagUser } from './users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser$: Observable<User | undefined>;

  constructor(private store: Store<State>) {
    this.users$ = this.store.pipe(select(usersSelector))
    this.selectedUser$ = this.store.pipe(select(selectUserById))
  }

  selectUser(id: string) {
    this.store.dispatch(selectUser(id));
  }

  flagUser(id: string, flag: boolean) {
    this.store.dispatch(flagUser({ id, flag }));
  } 

  trackByFn(index: Number, user: User) {
    return user.id.value;
  }

  ngOnInit(): void {
    this.store.dispatch(loadData());
  }
}