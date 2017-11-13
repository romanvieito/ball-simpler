/**
*
* ShowOnBases
*
*/

import React from 'react';
// import styled from 'styled-components';

import './component.css';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function ShowOnBases() {
  return (
    <div className="comp-back-color">
      {/* <FormattedMessage {...messages.header} /> */}
      <table className="table table-sm">
        <tbody>
          <tr>
            <td colSpan="2">McCarthy</td>
          </tr>
          <tr>
            <td>HOU</td>
            <td rowSpan="2"></td>
          </tr>
          <tr>
            <td>LAD</td>
          </tr>
          <tr>
            <td>^ 11</td>
            <td className="text-right">0 Out</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

ShowOnBases.propTypes = {

};

export default ShowOnBases;
