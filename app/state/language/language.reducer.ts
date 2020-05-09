import { LanguageActionsTypes, LanguageActionTypes } from './language.actions';
import { DEFAULT_LOCALE } from '../../locales';

export interface LanguageProviderState {
  readonly locale: string;
}

export const languageInitialState: LanguageProviderState = {
  locale: DEFAULT_LOCALE
};

export function languageProviderReducer(
  state: LanguageProviderState = languageInitialState,
  action: LanguageActionsTypes
): LanguageProviderState {
  switch (action.type) {
    case LanguageActionTypes.CHANGE_LOCALE:
      return {
        locale: action.payload
      };
    default:
      return state;
  }
}
