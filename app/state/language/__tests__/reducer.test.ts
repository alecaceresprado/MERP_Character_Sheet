import { languageProviderReducer } from '../language.reducer';
import { LanguageActionTypes } from '../language.actions';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {} as any)).toEqual({
      locale: 'en',
    });
  });

  it('changes the locale', () => {
    expect(
      languageProviderReducer(undefined, {
        type: LanguageActionTypes.CHANGE_LOCALE,
        payload: 'de',
      }),
    ).toEqual({
      locale: 'de',
    });
  });
});
