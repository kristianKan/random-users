import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsersService } from './users.service';
import { loadData, loadDataSuccess, loadDataFailure } from './users.actions';

@Injectable()
export class UsersEffects {
  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(loadData),
    mergeMap(() => this.usersService.getUsers().pipe(
      map(users => loadDataSuccess({ users })),
      catchError(error => of(loadDataFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}