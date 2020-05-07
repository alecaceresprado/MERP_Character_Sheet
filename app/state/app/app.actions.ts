import { action, ActionType } from 'typesafe-actions';

import { Repo } from 'models/repo.model';

export enum AppActionTypes {
  LOAD_REPOS = 'boilerplate/App/LOAD_REPOS',
  LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS',
  LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR',
}

export const AppActions = {
  loadRepos: () => action(AppActionTypes.LOAD_REPOS),
  reposLoaded: (repos: Repo[], username: string) =>
    action(AppActionTypes.LOAD_REPOS_SUCCESS, {
      repos: repos,
      username: username,
    }),
  repoLoadingError: (error: object) =>
    action(AppActionTypes.LOAD_REPOS_ERROR, error),
};

export type AppActionsTypes = ActionType<typeof AppActions>;
