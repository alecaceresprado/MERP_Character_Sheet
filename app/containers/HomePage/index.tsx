import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/redux-injectors';
import {
  makeSelectError,
  makeSelectPlayersSummary,
  makeSelectLoading
} from 'state/app/app.selectors';
import { AppActions } from 'state/app/app.actions';
import sagaPlayers from './saga-players';
import PlayerList from 'components/PlayerList';

const stateSelector = createStructuredSelector({
  error: makeSelectError(),
  players: makeSelectPlayersSummary(),
  loading: makeSelectLoading()
});

export default function HomePage() {
  const { error, players, loading } = useSelector(stateSelector);

  const dispatch = useDispatch();

  useInjectSaga({ key: 'global', saga: sagaPlayers });

  useEffect(() => {
    dispatch(AppActions.loadPlayersSummary());
  }, []);

  const playerListProps = {
    loading,
    error,
    players
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A MERP Character Sheet Project" />
      </Helmet>
      <div>
        <PlayerList {...playerListProps} />
      </div>
    </article>
  );
}
