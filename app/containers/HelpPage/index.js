/*
 * HelpPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
// import List from './List';
// import ListItem from './ListItem';
// import ListItemTitle from './ListItemTitle';

export default class HelpPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Help Page</title>
          <meta name="description" content="Help page" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </div>
    );
  }
}
