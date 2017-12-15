/**
*
* ShowOnBases
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import './component.css';

function OnBases(props) {
  return (
    <div>
      {props.bases[0] ? <div className="rombo first on-base"></div> : <div className="rombo first"></div>}
      {props.bases[1] ? <div className="rombo second on-base"></div> : <div className="rombo second"></div>}
      {props.bases[2] ? <div className="rombo third on-base"></div> : <div className="rombo third"></div>}
    </div>
  );
}

OnBases.propTypes = {
  bases: PropTypes.any,
};

export default OnBases;
