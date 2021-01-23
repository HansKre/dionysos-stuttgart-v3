import Typographie from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import MediaCard from './MediaCard';
import { nanoid } from 'nanoid';

import { data } from '../data/currentInfo';

const useStyles = makeStyles((theme) => ({
  title: {
    alignSelf: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
}));
const CurrentInfo = () => {

  const classes = useStyles();

  return (
    <Grid container alignItems='center' justify='center'>
      <Typographie color='textPrimary' variant='h3' className={classes.title}>Aktuelle Informatioinen</Typographie>
      {data && data.map((entry, index) => {
        const isOdd = index % 2 !== 0;
        return (
          <MediaCard key={nanoid()} {...entry} index={index} imgFirst={isOdd} />
        )
      })}
    </Grid>
  )
}

export default CurrentInfo;