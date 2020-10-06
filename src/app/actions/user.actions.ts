import { createAction, props } from '@ngrx/store';

export enum UserActionTypes {
  GetUser = '[User] Get Users',
  GetUserSuccess = '[User] Load Users',
  GetUserError = '[User] Error Users'
}

export const loadUsers = createAction(
  UserActionTypes.GetUser,
  props<{ data: any }>()
);

export const loadUsersSuccess = createAction(
  UserActionTypes.GetUserSuccess
);

export const loadUsersFailure = createAction(
  UserActionTypes.GetUserError,
  props<{ error: any }>()
);
