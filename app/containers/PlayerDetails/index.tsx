import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AppActions } from 'state/app';
import { useInjectSaga } from 'utils/redux-injectors';
import sagaPlayer from './saga-player';

export default function PlayerDetails() {
  const { id } = useParams();

  useInjectSaga({ key: 'global', saga: sagaPlayer });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AppActions.loadPlayerDetail(id));
  }, []);

  return <div>Player ID: {id}</div>;
}
