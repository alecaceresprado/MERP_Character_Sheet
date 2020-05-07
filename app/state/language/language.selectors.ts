import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { languageInitialState } from './language.reducer';

const selectLanguage = (state: ApplicationRootState) =>
    state.language || languageInitialState;

const makeSelectLocale = () =>
    createSelector(selectLanguage, languageState => languageState.locale);

export { selectLanguage, makeSelectLocale };
