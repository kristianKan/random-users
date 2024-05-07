import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsersService } from './users.service';
import { 
  loadData, 
  loadDataSuccess, 
  loadDataFailure, 
  flagUser, 
  flagUserSuccess, 
  flagUserFailure,
  loadDataFromLocalStorage
} from './users.actions';

@Injectable()
export class UsersEffects {
  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(loadData),
    mergeMap(() => this.usersService.getUsers().pipe(
      map(users => loadDataSuccess({ users })),
      catchError(error => of(loadDataFailure({ error })))
    ))
  ));

  flagUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(flagUser),
      mergeMap(({ id, flag, to, from }) =>
        this.usersService.flagUser({id, flag, to, from }).pipe(
          map(user => flagUserSuccess({ user })),
          catchError(error => of(flagUserFailure({ error })))
        )
      )
    )
  );

  loadDataFromLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => loadDataFromLocalStorage())
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}