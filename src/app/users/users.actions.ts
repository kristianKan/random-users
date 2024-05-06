import { createAction } from '@ngrx/store';

export const loadDataSuccess = createAction(
  '[Service] Load Data Success',
  (payload: any) => ({ payload })
);

export const loadDataFailure = createAction(
  '[Service] Load Data Failure',
  (payload: any) => ({ payload })
);

export const flagUser = createAction(
  '[Component] Flag User', 
  ({ id: string, flag: boolean }) => ({ id: string, flag: boolean })
);

export const selectUser = createAction(
  '[Component] Select User',
  (id: string) => ({ id })
)

export const loadData = createAction('[Effect] Load Data');