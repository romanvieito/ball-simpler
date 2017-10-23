import React from 'react';
// import { FormattedMessage } from 'react-intl';
import NormalImg from 'components/Img';

// import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import './dices.css';
import DiceImg1 from '../../images/dices/1c.gif';
// import DiceImg2 from '../../images/dices/2c.gif';
// import DiceImg3 from '../../images/dices/3c.gif';
// import DiceImg4 from '../../images/dices/4c.gif';
// import DiceImg5 from '../../images/dices/5c.gif';
// import DiceImg6 from '../../images/dices/6c.gif';

// import messages from './messages';

function Dices() {
  return (
    <Wrapper>
      <section>
        <NormalImg src={DiceImg1} alt="1" />
      </section>
    </Wrapper>
  );
}

export default Dices;
