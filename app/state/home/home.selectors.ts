/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { homeInitialState } from './home.reducer';

const selectHome = (state: ApplicationRootState) => state.home || homeInitialState;

const makeSelectUsername = () =>
    createSelector(selectHome, substate => substate.username);

export { selectHome, makeSelectUsername };
