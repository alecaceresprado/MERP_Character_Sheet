import { action, ActionType } from 'typesafe-actions';

export enum LanguageActionTypes {
  CHANGE_LOCALE = 'app/LanguageToggle/CHANGE_LOCALE'
}

export const LanguageActions = {
  changeLocale: (languageLocale: string) =>
    action(LanguageActionTypes.CHANGE_LOCALE, languageLocale)
};

export type LanguageActionsTypes = ActionType<typeof LanguageActions>;
