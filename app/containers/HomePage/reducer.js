/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  CHANGE_DICENUMBER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  dicenumber: 2,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:

      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
    case CHANGE_DICENUMBER:

      // CHANGE_DICENUMBER
      return state
        .set('dicenumber', action.randomNum);

    default:
      return state;
  }
}

export default homeReducer;
