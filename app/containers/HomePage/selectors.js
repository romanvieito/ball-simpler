/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectNumber = () => createSelector(
  selectHome,
  (homeState) => homeState.get('dicenumber')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectNumber,
};
