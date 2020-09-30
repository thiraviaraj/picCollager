import { createAction, props } from '@ngrx/store';

export const loadConfigs = createAction(
  '[Config] Load Configs'
);

export const loadConfigsSuccess = createAction(
  '[Config] Load Configs Success',
  props<{ data: any }>()
);

export const loadConfigsFailure = createAction(
  '[Config] Load Configs Failure',
  props<{ error: any }>()
);
