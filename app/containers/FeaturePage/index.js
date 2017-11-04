/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import Img from 'components/Img';
import Player from '../../images/players/1.png';

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
        PLAY
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Img src={Player} alt="Player" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                lkj
              </div>
              <div className="col-4">
                lkj
              </div>
              <div className="col-4">
                lkj
              </div>
            </div>
          </div>
      </div>
    );
  }
}
