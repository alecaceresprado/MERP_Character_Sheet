/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import {
  makeSelectError,
  makeSelectLoading,
  makeSelectRepos,
} from 'state/app/app.selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { AppActions } from 'state/app/app.actions';
import { HomeActions } from 'state/home/home.actions';
import { makeSelectUsername } from 'state/home/home.selectors';
import { homeReducer } from 'state/home/home.reducer';
import saga from './saga';

const key = 'home';

const stateSelector = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default function HomePage() {
  const { repos, username, loading, error } = useSelector(stateSelector);

  const dispatch = useDispatch();

  // Not gonna declare event types here. No need. any is fine
  const onChangeUsername = (evt: any) =>
    dispatch(HomeActions.changeUsername(evt.target.value));
  const onSubmitForm = (evt?: any) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    if (!username) {
      return;
    }
    dispatch(AppActions.loadRepos());
  };

  useInjectReducer({ key: key, reducer: homeReducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }, []);

  const reposListProps = {
    loading: loading,
    error: error,
    repos: repos,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </Form>
          <ReposList {...reposListProps} />
        </Section>
      </div>
    </article>
  );
}
