/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_RANDOM_DICENUMBER,
} from './constants';

/**
 * Changes the dice number
 *
 * @return {object}    An action object with a random number
 */
export function rollDicesSimulator() {
  const randomNum1 = Math.ceil(Math.random() * 6);
  const randomNum2 = Math.ceil(Math.random() * 6);
  const bases = [true, true, false];
  return {
    type: CHANGE_RANDOM_DICENUMBER,
    data: {
      randomNum1,
      randomNum2,
      bases,
    },
  };
}
