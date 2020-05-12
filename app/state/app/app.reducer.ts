import { PlayerSummary, Player } from 'models';
import { AppActionsTypes, AppActionTypes } from './app.actions';

export interface AppState {
  readonly loading: boolean;
  readonly error?: object | boolean;
  readonly players: PlayerSummary[];
  readonly player?: Player;
}

export const appInitialState: AppState = {
  loading: false,
  error: false,
  players: [],
  player: undefined
};

// Take this container's state (as a slice of root state), this container's actions and return new state
export function appReducer(
  state: AppState = appInitialState,
  action: AppActionsTypes
): AppState {
  switch (action.type) {
    case AppActionTypes.LOAD_PLAYERS_SUMMARY:
      return {
        ...state,
        loading: true,
        error: false,
        players: []
      };
    case AppActionTypes.LOAD_PLAYERS_SUMMARY_SUCCESS:
      return {
        ...state,
        loading: false,
        players: action.payload
      };
    case AppActionTypes.LOAD_PLAYER_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        player: action.payload
      };
    case AppActionTypes.LOAD_PLAYERS_SUMMARY_ERROR:
    case AppActionTypes.LOAD_PLAYER_DETAIL_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
