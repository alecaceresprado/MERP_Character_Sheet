import { action } from 'typesafe-actions';

import { AppActions, AppActionTypes } from '../app.actions';
import { PlayerSummary } from 'models';

describe('App Actions', () => {
  describe('loadPlayersSummary', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: AppActionTypes.LOAD_PLAYERS_SUMMARY
      };

      expect(AppActions.loadPlayersSummary()).toEqual(expectedResult);
    });
  });

  describe('playersSummaryLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = [{}] as PlayerSummary[];
      const expectedResult = action(
        AppActionTypes.LOAD_PLAYERS_SUMMARY_SUCCESS,
        fixture
      );

      expect(AppActions.playersSummaryLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('playersSummaryLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!'
      };
      const expectedResult = action(
        AppActionTypes.LOAD_PLAYERS_SUMMARY_ERROR,
        fixture
      );

      expect(AppActions.playersSummaryLoadingError(fixture)).toEqual(
        expectedResult
      );
    });
  });
});
