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
import DiceImg2 from '../../images/dices/2small.gif';
import DiceImg3 from '../../images/dices/3small.gif';
import DiceImg4 from '../../images/dices/4small.gif';
import DiceImg5 from '../../images/dices/5small.gif';
import DiceImg6 from '../../images/dices/6small.gif';

// import messages from './messages';

function Dices(props) {
  return (
    <Wrapper>
      <section>
        <div className="first-dice">
          { props.value === 1 ? <NormalImg src={DiceImg1} alt={props.value.toString()} /> : null }
          { props.value === 2 ? <NormalImg src={DiceImg2} alt={props.value.toString()} /> : null }
          { props.value === 3 ? <NormalImg src={DiceImg3} alt={props.value.toString()} /> : null }
          { props.value === 4 ? <NormalImg src={DiceImg4} alt={props.value.toString()} /> : null }
          { props.value === 5 ? <NormalImg src={DiceImg5} alt={props.value.toString()} /> : null }
          { props.value === 6 ? <NormalImg src={DiceImg6} alt={props.value.toString()} /> : null }
        </div>
        <div className="second-dice margin-left-2p">
          { props.value2 === 1 ? <NormalImg src={DiceImg1} alt={props.value.toString()} /> : null }
          { props.value2 === 2 ? <NormalImg src={DiceImg2} alt={props.value.toString()} /> : null }
          { props.value2 === 3 ? <NormalImg src={DiceImg3} alt={props.value.toString()} /> : null }
          { props.value2 === 4 ? <NormalImg src={DiceImg4} alt={props.value.toString()} /> : null }
          { props.value2 === 5 ? <NormalImg src={DiceImg5} alt={props.value.toString()} /> : null }
          { props.value2 === 6 ? <NormalImg src={DiceImg6} alt={props.value.toString()} /> : null }
        </div>
        <Btn onClick={props.onClickBtn}>Go</Btn>
      </section>
    </Wrapper>
  );
}

Dices.propTypes = {
  onClickBtn: PropTypes.func,
  value: PropTypes.number,
  value2: PropTypes.number,
};

export default Dices;
