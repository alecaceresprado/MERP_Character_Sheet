import { call, put, takeLatest } from 'redux-saga/effects';

import { AppActions, AppActionTypes } from 'state/app/app.actions';
import request from 'utils/request';

export function* getPlayersDetail(action) {
    const requestURL = `/mockPlayer/${action.payload}`;

    try {
        const playerDetails = yield call(request, requestURL);
        yield put(AppActions.playerDetailsLoaded(playerDetails));
    } catch (err) {
        yield put(AppActions.playerDetailsLoadingError(err));
    }
}

export default function* getPlayerDetailData() {
    yield takeLatest(AppActionTypes.LOAD_PLAYER_DETAIL, getPlayersDetail);
}
