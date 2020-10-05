import { createAction, props } from "@ngrx/store";

export enum ConfigActionTypes {
  loadFiles = '[Config] Load Files',
  unLoadFiles = '[Config] UnLoad Files',
  loadFilesSuccess = '[Config] Files Success',
  loadFilesError = '[Config] Files Error'
}

export const loadConfigs = createAction(
  ConfigActionTypes.loadFiles,
  props<{ data: any }>()
);

export const unLoadConfigs = createAction(
  ConfigActionTypes.unLoadFiles,
  props<{ data: any }>()
);

export const loadConfigsSuccess = createAction(
  ConfigActionTypes.loadFilesSuccess,
  props<{ data: any }>()
);

export const loadConfigsFailure = createAction(
  ConfigActionTypes.loadFilesError,
  props<{ error: any }>()
);
