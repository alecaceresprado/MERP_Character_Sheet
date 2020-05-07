import { action } from 'typesafe-actions';

import { HomeActions, HomeActionTypes } from '../home.actions';

describe('Home Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = action(HomeActionTypes.CHANGE_USERNAME, fixture);

      expect(HomeActions.changeUsername(fixture)).toEqual(expectedResult);
    });
  });
});
