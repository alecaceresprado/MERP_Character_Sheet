import { call, put, takeLatest } from 'redux-saga/effects';

import { AppActions, AppActionTypes } from 'state/app/app.actions';
import request from 'utils/request';

export function* getPlayersSummary() {
  const requestURL = '/mock';

  try {
    const playersSummary = yield call(request, requestURL);
    yield put(AppActions.playersSummaryLoaded(playersSummary));
  } catch (err) {
    yield put(AppActions.playersSummaryLoadingError(err));
  }
}

export default function* getPlayerData() {
  yield takeLatest(AppActionTypes.LOAD_PLAYERS_SUMMARY, getPlayersSummary);
}
