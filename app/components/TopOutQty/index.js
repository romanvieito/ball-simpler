import React from 'react';
import PropTypes from 'prop-types';

import './outQty.css';

function OutQty(prop) {
  return (
    <div className="out">
      {prop.outs} out
    </div>
  );
}

OutQty.propTypes = {
  outs: PropTypes.number,
};

export default OutQty;
