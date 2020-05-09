import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import LoadingIndicator from 'components/LoadingIndicator';
import { AppState } from 'state/app/app.reducer';
import PlayerSummaryCard from 'containers/PlayerSummaryCard';

export type PlayerListProps = Pick<AppState, 'loading' | 'error' | 'players'>;

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

function PlayerList({ loading, error, players }: PlayerListProps) {
  const classes = useStyles();

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false || players === undefined) {
    return <div>Something went wrong, please try again!</div>;
  }

  if (!players.length) {
    return null;
  }

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {players.map(player => (
          <PlayerSummaryCard key={`item-${player.id}`} item={player} />
        ))}
      </Grid>
    </Container>
  );
}

export default PlayerList;
