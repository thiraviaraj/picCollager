import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { ConfigActionTypes } from '../actions/config.actions';
import { environment } from "../../environments/environment";

export interface configState {
  config: Object | null;
}

const initialConfigState: Object = {
  width: 1280,
  height: 600,
  fileToUpload: []
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
export const reducers: ActionReducerMap<configState> = {
  config: configReducer
};

export const metaReducers: MetaReducer<configState>[] = !environment.production
  ? []
  : [];
