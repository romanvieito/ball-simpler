
import { fromJS } from 'immutable';

import {
  CHANGE_RANDOM_DICENUMBER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  dicenumber1: 1,
  dicenumber2: 1,
  bases: [false, false, false],
});

function playReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_RANDOM_DICENUMBER:

      // CHANGE_RANDOM_DICENUMBER
      return state
        .set('dicenumber1', action.data.randomNum1)
        .set('dicenumber2', action.data.randomNum2)
        .set('bases', action.data.bases);

    default:
      return state;
  }
}

export default playReducer;
