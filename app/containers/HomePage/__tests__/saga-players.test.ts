/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { AppActions, AppActionTypes } from 'state/app/app.actions';
import getPlayerData, { getPlayersSummary } from '../saga-players';
import { PlayerSummary } from 'models';

describe('getPlayersSummary Saga', () => {
  let getPlayersSummaryGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getPlayersSummaryGenerator = getPlayersSummary();

    const selectDescriptor = getPlayersSummaryGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the playersSummaryLoaded action if it requests the data successfully', () => {
    const response = [
      {
        id: '1',
        description: 'Braided long beard with charms with runes',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3JvT2n7sHUoBw9QqyV-KlwYHfKphD4y0thI9k_iJsyeKmWwcZ&usqp=CAU',
        name: 'Lothar Picco'
      },
      {
        id: '2',
        description: 'Braided long beard with charms with runes',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3JvT2n7sHUoBw9QqyV-KlwYHfKphD4y0thI9k_iJsyeKmWwcZ&usqp=CAU',
        name: 'Lothar Picco'
      },
      {
        id: '3',
        description: 'Braided long beard with charms with runes',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3JvT2n7sHUoBw9QqyV-KlwYHfKphD4y0thI9k_iJsyeKmWwcZ&usqp=CAU',
        name: 'Lothar Picco'
      },
      {
        id: '4',
        description: 'Braided long beard with charms with runes',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3JvT2n7sHUoBw9QqyV-KlwYHfKphD4y0thI9k_iJsyeKmWwcZ&usqp=CAU',
        name: 'Lothar Picco'
      }
    ] as PlayerSummary[];
    const putDescriptor = getPlayersSummaryGenerator.next(response).value;
    expect(putDescriptor).toEqual(
      put(AppActions.playersSummaryLoaded(response))
    );
  });

  it('should call the playersSummaryLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getPlayersSummaryGenerator.throw(response).value;
    expect(putDescriptor).toEqual(
      put(AppActions.playersSummaryLoadingError(response))
    );
  });
});

describe('getPlayerData Saga', () => {
  const getPlayerDataSaga = getPlayerData();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = getPlayerDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(AppActionTypes.LOAD_PLAYERS_SUMMARY, getPlayersSummary)
    );
  });
});
