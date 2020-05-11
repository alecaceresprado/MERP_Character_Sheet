/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { AppActions, AppActionTypes } from 'state/app/app.actions';
import getPlayerDetailData, { getPlayersDetail } from '../saga-player';
import { PlayerSummary, Player } from 'models';
import { characters } from 'mocks';

describe('getPlayersDetail Saga', () => {
    let getPlayerDetailGenerator;

    // We have to test twice, once for a successful load and once for an unsuccessful one
    // so we do all the stuff that happens beforehand automatically in the beforeEach
    beforeEach(() => {
        getPlayerDetailGenerator = getPlayersDetail(AppActions.loadPlayerDetail('1'));

        const selectDescriptor = getPlayerDetailGenerator.next().value;
        expect(selectDescriptor).toMatchSnapshot();
    });

    it('should dispatch the playerDetailsLoaded action if it requests the data successfully', () => {
        const response = characters[0];
        const putDescriptor = getPlayerDetailGenerator.next(response).value;
        expect(putDescriptor).toEqual(
            put(AppActions.playerDetailsLoaded(response))
        );
    });

    it('should call the playerDetailsLoadingError action if the response errors', () => {
        const response = new Error('Some error');
        const putDescriptor = getPlayerDetailGenerator.throw(response).value;
        expect(putDescriptor).toEqual(
            put(AppActions.playerDetailsLoadingError(response))
        );
    });
});

describe('getPlayerDetailData Saga', () => {
    const getPlayerDetailDataSaga = getPlayerDetailData();

    it('should start task to watch for LOAD_PLAYER_DETAIL action', () => {
        const takeLatestDescriptor = getPlayerDetailDataSaga.next().value;
        expect(takeLatestDescriptor).toEqual(
            takeLatest(AppActionTypes.LOAD_PLAYER_DETAIL, getPlayersDetail)
        );
    });
});
