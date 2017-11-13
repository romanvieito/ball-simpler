/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';

// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername, rollDicesSimulator } from './actions';
import { makeSelectUsername, makeSelectNumber, makeSelectNumber2 } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  // componentDidMount() {
  //   if (this.props.username && this.props.username.trim().length > 0) {
  //     this.props.onSubmitForm();
  //   }
  // }

  render() {
    // const { loading, error, repos } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <Header />
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.mainHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.mainDescription} />
            </p>
          </CenteredSection>
          {/* <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
            </Form>
            <ReposList {...reposListProps} />
          </Section> */}
        </div>
      </article>
    );
  }
}

// HomePage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.bool,
//   ]),
//   repos: PropTypes.oneOfType([
//     PropTypes.array,
//     PropTypes.bool,
//   ]),
//   onSubmitForm: PropTypes.func,
//   dicenumber: PropTypes.string,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func,
// };

HomePage.propTypes = {
  dicenumber1: PropTypes.number.isRequired,
  dicenumber2: PropTypes.number,
  onRollDicesSimulator: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onRollDicesSimulator: (evt) => dispatch(rollDicesSimulator(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  dicenumber1: makeSelectNumber(),
  dicenumber2: makeSelectNumber2(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
