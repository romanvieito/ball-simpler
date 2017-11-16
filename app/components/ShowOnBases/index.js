/**
*
* ShowOnBases
*
*/

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';

import './component.css';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function ShowOnBases(props) {
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
            <td rowSpan="2">
              <div>
                {props.bases[0] ? <div className="rombo first on-base"></div> : <div className="rombo first"></div>}
                {props.bases[1] ? <div className="rombo second on-base"></div> : <div className="rombo second"></div> }
                {props.bases[2] ? <div className="rombo third on-base"></div> : <div className="rombo third"></div> }
              </div>
            </td>
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
  bases: PropTypes.any,
};

export default ShowOnBases;
