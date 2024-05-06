import { createAction } from '@ngrx/store';
import { FlagUserPayload } from './users.model';

export const loadDataSuccess = createAction(
  '[Service] Load Data Success',
  (payload: any) => ({ payload })
);

export const loadDataFailure = createAction(
  '[Service] Load Data Failure',
  (payload: any) => ({ payload })
);

export const flagUserSuccess = createAction(
  '[Service] Flag User Success',
  (payload: any) => ({ payload })
);

export const flagUserFailure = createAction(
  '[Service] Flag User Failure',
  (payload: any) => ({ payload })
);

export const flagUser = createAction(
  '[Component] Flag User', 
  ({id, flag, to, from}: FlagUserPayload) => ({ id, flag, to, from })
);

export const selectUser = createAction(
  '[Component] Select User',
  (id: string) => ({ id })
)

export const loadData = createAction('[Effect] Load Data');