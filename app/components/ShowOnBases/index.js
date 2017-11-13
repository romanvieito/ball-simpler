/**
*
* ShowOnBases
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ShowOnBases() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ShowOnBases.propTypes = {

};

export default ShowOnBases;
