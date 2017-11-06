import React from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Img';

import './player.css';

function PlayerImg(prop) {
  return (
    <div className="player">
      <Img src={prop.imgSource} alt="Player" />
    </div>
  );
}

PlayerImg.propTypes = {
  src: PropTypes.string,
};

export default PlayerImg;
