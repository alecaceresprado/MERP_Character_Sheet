import { HomeActionsTypes, HomeActionTypes } from './home.actions';

export interface HomeState {
    readonly username: string;
}

export const homeInitialState: HomeState = {
    username: '',
};

// Take this container's state (as a slice of root state), this container's actions and return new state
export function homeReducer(
    state: HomeState = homeInitialState,
    action: HomeActionsTypes,
): HomeState {
    switch (action.type) {
        case HomeActionTypes.CHANGE_USERNAME:
            return {
                // Delete prefixed '@' from the github username
                username: action.payload.replace(/@/gi, ''),
            };
        default:
            return state;
    }
}
