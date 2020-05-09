import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';

import { PlayerSummary } from 'models';
import messages from './messages';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default function PlayerSummaryCard({ item }: { item: PlayerSummary }) {
  const classes = useStyles();

  return (
    <Grid item key={item.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={item.avatarUrl}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography>{item.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={`/player/${item.id}`}>
            <FormattedMessage {...messages.viewButton} />
          </Button>
          <Button size="small" color="primary" href={`/player/${item.id}/edit`}>
            <FormattedMessage {...messages.editButton} />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
