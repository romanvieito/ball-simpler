/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import ImgPlayer from 'components/PlayerImg';
import Player from '../../images/players/1.png';
import Player2 from '../../images/players/2.png';

import './play.css';

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
        <div className="container-fluid">
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
              </div>
            </div>
            <div className="col-6">
              <div className="row teamVisitor">
                <ImgPlayer imgSource={Player2}></ImgPlayer>
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
              ...
              </div>
            <div className="col-4">
              ...
              </div>
            <div className="col-4">
              ...
            </div>
          </div>
        </div>
      </div>
    );
  }
}
