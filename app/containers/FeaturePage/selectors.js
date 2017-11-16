/**
 * Playpage selectors
 */

import { createSelector } from 'reselect';

const selectPlay = (state) => state.get('play');

const makeSelectRandomNumber = () => createSelector(
  selectPlay,
  (playState) => playState.get('dicenumber1')
);

const makeSelectRandomNumber2 = () => createSelector(
  selectPlay,
  (playState) => playState.get('dicenumber2')
);

const bases = () => createSelector(
  selectPlay,
  (playState) => playState.get('bases')
);

export {
  selectPlay,
  makeSelectRandomNumber,
  makeSelectRandomNumber2,
  bases,
};
