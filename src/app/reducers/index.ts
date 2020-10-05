import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
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
    case "[Config] Load Configs":
      state = { ...state };
      state.fileToUpload = action.data;
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
