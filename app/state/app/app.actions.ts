import { action, ActionType } from 'typesafe-actions';

import { PlayerSummary } from 'models';

export enum AppActionTypes {
  LOAD_PLAYERS_SUMMARY = '[APP] Load Players Summary',
  LOAD_PLAYERS_SUMMARY_SUCCESS = '[APP] Loading Players Summary With Sucess',
  LOAD_PLAYERS_SUMMARY_ERROR = '[APP] Error While Loading Players Summary'
}

export const AppActions = {
  loadPlayersSummary: () => action(AppActionTypes.LOAD_PLAYERS_SUMMARY),
  playersSummaryLoaded: (players: PlayerSummary[]) =>
    action(AppActionTypes.LOAD_PLAYERS_SUMMARY_SUCCESS, players),
  playersSummaryLoadingError: (error: object) =>
    action(AppActionTypes.LOAD_PLAYERS_SUMMARY_ERROR, error)
};

export type AppActionsTypes = ActionType<typeof AppActions>;
