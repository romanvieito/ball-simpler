/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import ImgPlayer from 'components/PlayerImg';
import RunQty from 'components/TopRunQty';
import OutQty from 'components/TopOutQty';
import CenterBoard from 'components/CenterBoard';
import HitterList from 'components/HitterList';
import Player from '../../images/players/1.png';
import Player2 from '../../images/players/2.png';
import Player3 from '../../images/players/3.svg';

import './playBall.css';

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
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
            </div>
            <div className="col-4">
              <HitterList></HitterList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
