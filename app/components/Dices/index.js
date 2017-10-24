import React from 'react';
import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
import NormalImg from 'components/Img';
import Btn from 'components/Button';

// import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import './dices.css';
import DiceImg1 from '../../images/dices/1small.gif';
// import DiceImg2 from '../../images/dices/2small.gif';
// import DiceImg3 from '../../images/dices/3small.gif';
// import DiceImg4 from '../../images/dices/4small.gif';
// import DiceImg5 from '../../images/dices/5small.gif';
// import DiceImg6 from '../../images/dices/6small.gif';

// import messages from './messages';

function Dices(props) {
  return (
    <Wrapper>
      <section>
        <Btn onClick={props.onClickBtn}>Roll</Btn>
        <NormalImg src={DiceImg1} alt="1" />
        <NormalImg className="margin-left-2p" src={DiceImg1} alt="1" />
      </section>
    </Wrapper>
  );
}

Dices.propTypes = {
  onClickBtn: PropTypes.any,
};

export default Dices;
