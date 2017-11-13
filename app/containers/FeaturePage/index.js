/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';

import injectReducer from 'utils/injectReducer';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import ImgPlayer from 'components/PlayerImg';
import RunQty from 'components/TopRunQty';
import OutQty from 'components/TopOutQty';
import CenterBoard from 'components/CenterBoard';
import ScoreTable from 'components/ScoreTable';
import HitterList from 'components/HitterList';
import Dices from 'components/Dices';
import Player from '../../images/players/1.png';
import Player2 from '../../images/players/2.png';
import Player3 from '../../images/players/3.svg';

import { rollDicesSimulator } from './actions';
import { makeSelectRandomNumber, makeSelectRandomNumber2 } from './selectors';

import reducer from './reducer';

import './playBall.css';

export class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  // shouldComponentUpdate() {
  //   return true;
  // }

  render() {
    return (
      <div>
        <Helmet>
          <title>Play Page</title>
          <meta name="description" content="Play Ball" />
        </Helmet>
        <div className="container-fluid back-color">
          <div className="row">
            <div className="col-6">
              <div className="row teamHome">
                <ImgPlayer imgSource={Player}></ImgPlayer>
                <ImgPlayer imgSource={Player}></ImgPlayer>
                <ImgPlayer imgSource={Player}></ImgPlayer>
                <ImgPlayer imgSource={Player}></ImgPlayer>
                <ImgPlayer imgSource={Player}></ImgPlayer>
                <ImgPlayer imgSource={Player}></ImgPlayer>
                <ImgPlayer imgSource={Player}></ImgPlayer>
                <ImgPlayer imgSource={Player}></ImgPlayer>
                <ImgPlayer imgSource={Player}></ImgPlayer>
                <RunQty score="5"></RunQty>
                <OutQty outs="2"></OutQty>
              </div>
            </div>
            <div className="col-6">
              <div className="row teamVisitor">
                <RunQty score="3"></RunQty>
                <ImgPlayer imgSource={Player3}></ImgPlayer>
                <ImgPlayer imgSource={Player2}></ImgPlayer>
                <ImgPlayer imgSource={Player2}></ImgPlayer>
                <ImgPlayer imgSource={Player2}></ImgPlayer>
                <ImgPlayer imgSource={Player2}></ImgPlayer>
                <ImgPlayer imgSource={Player2}></ImgPlayer>
                <ImgPlayer imgSource={Player2}></ImgPlayer>
                <ImgPlayer imgSource={Player2}></ImgPlayer>
                <ImgPlayer imgSource={Player2}></ImgPlayer>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <HitterList></HitterList>
            </div>
            <div className="col-4">
              <CenterBoard></CenterBoard>
              <ScoreTable></ScoreTable>
            </div>
            <div className="col-4">
              <HitterList></HitterList>
              <Dices value={this.props.dicenumber1} value2={this.props.dicenumber2} onClickBtn={this.props.onRollDicesSimulator}></Dices>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FeaturePage.propTypes = {
  dicenumber1: PropTypes.number.isRequired,
  dicenumber2: PropTypes.number,
  onRollDicesSimulator: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onRollDicesSimulator: (evt) => dispatch(rollDicesSimulator(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  dicenumber1: makeSelectRandomNumber(),
  dicenumber2: makeSelectRandomNumber2(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'play', reducer });

export default compose(
  withReducer,
  withConnect,
)(FeaturePage);
