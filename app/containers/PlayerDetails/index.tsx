import * as React from 'react';
import { useParams } from 'react-router-dom';

export default function PlayerDetails() {
  const { id } = useParams();

  return <div>Player ID: {id}</div>;
}
