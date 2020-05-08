import { action } from 'typesafe-actions';

import { LanguageActionTypes, LanguageActions } from '../language.actions';

describe('LanguageProvider actions', () => {
  describe('Change Local Action', () => {
    it('has a type of CHANGE_LOCALE', () => {
      const expected = action(LanguageActionTypes.CHANGE_LOCALE, 'de');
      expect(LanguageActions.changeLocale('de')).toEqual(expected);
    });
  });
});
