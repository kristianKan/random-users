import { createAction } from '@ngrx/store';

export const loadDataSuccess = createAction(
  '[ApiService] Load Data Success',
  (payload: any) => ({ payload })
);

export const loadDataFailure = createAction(
  '[ApiService] Load Data Failure',
  (payload: any) => ({ payload })
);

export const flagUsers = createAction(
  '[Users Component] Flag User', 
  (userIds: Array<string>) => ({ userIds })
);

export const selectUser = createAction(
  '[Users Component] Select User',
  (id: string) => ({ id })
)

export const loadData = createAction('[Users Component] Load Data');