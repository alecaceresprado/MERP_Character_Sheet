import { action, ActionType } from 'typesafe-actions';

export enum HomeActionTypes {
    CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME',
}

export const HomeActions = {
    changeUsername: (name: string) =>
        action(HomeActionTypes.CHANGE_USERNAME, name)
};

export type HomeActionsTypes = ActionType<typeof HomeActions>;