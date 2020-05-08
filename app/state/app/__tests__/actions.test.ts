import { action } from 'typesafe-actions';

import { AppActions, AppActionTypes } from '../app.actions';
import { Repo } from 'models/repo.model';

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: AppActionTypes.LOAD_REPOS,
      };

      expect(AppActions.loadRepos()).toEqual(expectedResult);
    });
  });

  describe('reposLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = [{}] as Repo[];
      const username = 'test';
      const expectedResult = action(AppActionTypes.LOAD_REPOS_SUCCESS, {
        repos: fixture,
        username,
      });

      expect(AppActions.reposLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = action(AppActionTypes.LOAD_REPOS_ERROR, fixture);

      expect(AppActions.repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
