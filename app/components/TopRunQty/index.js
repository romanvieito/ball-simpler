import React from 'react';
import PropTypes from 'prop-types';

import './runQty.css';

function RunQty(prop) {
  return (
    <div className="color">
      {prop.score}
    </div>
  );
}

RunQty.propTypes = {
  src: PropTypes.string,
};

export default RunQty;
