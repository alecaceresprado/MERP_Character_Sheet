import { action, ActionType } from 'typesafe-actions';

import { PlayerSummary, Player } from 'models';

export enum AppActionTypes {
  LOAD_PLAYERS_SUMMARY = '[APP] Load Players Summary',
  LOAD_PLAYERS_SUMMARY_SUCCESS = '[APP] Loading Players Summary With Sucess',
  LOAD_PLAYERS_SUMMARY_ERROR = '[APP] Error While Loading Players Summary',
  LOAD_PLAYER_DETAIL = '[APP] Load Player Detail',
  LOAD_PLAYER_DETAIL_SUCCESS = '[APP] Loading Players Detail With Sucess',
  LOAD_PLAYER_DETAIL_ERROR = '[APP] Error While Loading Players Detail',
}

export const AppActions = {
  loadPlayersSummary: () => action(AppActionTypes.LOAD_PLAYERS_SUMMARY),
  playersSummaryLoaded: (players: PlayerSummary[]) =>
    action(AppActionTypes.LOAD_PLAYERS_SUMMARY_SUCCESS, players),
  playersSummaryLoadingError: (error: object) =>
    action(AppActionTypes.LOAD_PLAYERS_SUMMARY_ERROR, error),
  loadPlayerDetail: (id: string | undefined) => action(AppActionTypes.LOAD_PLAYER_DETAIL, id),
  playerDetailsLoaded: (player: Player) =>
    action(AppActionTypes.LOAD_PLAYER_DETAIL_SUCCESS, player),
  playerDetailsLoadingError: (error: object) =>
    action(AppActionTypes.LOAD_PLAYER_DETAIL_ERROR, error)
};

export type AppActionsTypes = ActionType<typeof AppActions>;
