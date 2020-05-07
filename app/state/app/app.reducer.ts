import { Repo } from 'models/repo.model';
import { AppActionsTypes, AppActionTypes } from './app.actions';

export interface AppState {
  readonly loading: boolean;
  readonly error?: object | boolean;
  readonly currentUser: string;
  readonly userData: UserData;
}

export interface UserData {
  readonly repos?: Repo[];
}

// The initial state of the App
export const appInitialState: AppState = {
  loading: false,
  error: false,
  currentUser: '',
  userData: {
    repos: [],
  },
};

// Take this container's state (as a slice of root state), this container's actions and return new state
export function appReducer(
  state: AppState = appInitialState,
  action: AppActionsTypes,
): AppState {
  switch (action.type) {
    case AppActionTypes.LOAD_REPOS:
      return {
        currentUser: state.currentUser,
        loading: true,
        error: false,
        userData: {
          repos: [],
        },
      };
    case AppActionTypes.LOAD_REPOS_SUCCESS:
      return {
        currentUser: action.payload.username,
        loading: false,
        error: state.error,
        userData: {
          repos: action.payload.repos,
        },
      };
    case AppActionTypes.LOAD_REPOS_ERROR:
      const { error, loading, ...rest } = state;
      return {
        error: action.payload,
        loading: false,
        ...rest,
      };
    default:
      return state;
  }
}