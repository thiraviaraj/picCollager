import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { ConfigActionTypes } from '../actions/config.actions';
import { UserActionTypes } from '../actions/user.actions';
import { environment } from "../../environments/environment";

export interface appState {
  config: Object | null;
  user: Object | null;
}

const initialConfigState: Object = {
  width: 1280,
  height: 600,
  fileToUpload: []
};
const initialUserState: Object = {
  isLoggedIn: false
};
export function configReducer(
  state: any = initialConfigState,
  action: any
): any {
  switch (action.type) {
    case ConfigActionTypes.loadFiles:
      state = { ...state };
      state.fileToUpload = action.data;
      return state;
    case ConfigActionTypes.unLoadFiles:
      state = { ...state };
      console.log(action.data);
      let fileArr = [...state.fileToUpload];
      fileArr.splice(action.data, 1);
      state.fileToUpload = fileArr;
      return state;
    default:
      return state;
  }
}
export function userReducer(
  state: any = initialUserState,
  action: any
): any {
  switch (action.type) {
    case UserActionTypes.GetUser:
      return state;
    case UserActionTypes.GetUserSuccess:
      state = { ...state };
      return state;
    case UserActionTypes.GetUserError:
      return state;
    default:
      return state;
  }
}
export const reducers: ActionReducerMap<appState> = {
  config: configReducer,
  user: userReducer
};

export const metaReducers: MetaReducer<appState>[] = !environment.production
  ? []
  : [];
