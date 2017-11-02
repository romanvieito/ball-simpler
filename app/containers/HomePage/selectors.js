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
  (homeState) => homeState.get('dicenumber1')
);

const makeSelectNumber2 = () => createSelector(
  selectHome,
  (homeState) => homeState.get('dicenumber2')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectNumber,
  makeSelectNumber2,
};
