import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import MediaCard from '../../components/MediaCard';
import { nanoid } from 'nanoid';

import leaf1 from '../../img/leaf1.png';
import leaf2 from '../../img/leaf2.png';
import leaf3 from '../../img/leaf3.png';
import leaf4 from '../../img/leaf4.png';

import { data } from '../../data/openingTimes';

const useStyles = makeStyles((theme) => ({
  title: {
    alignSelf: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  background: {
    backgroundImage: `url(${leaf1}), url(${leaf2}), url(${leaf3}), url(${leaf4})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200px 200px',
    backgroundPosition: 'top 40px left -70px, bottom 200px left -57px, top -10px right -40px, bottom 10px right -40px',
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: 'top 60px left -110px, bottom 200px left -57px, top -30px right -130px, bottom 150px right -40px',
    }
    // TODO let leafes overflow into page above
  }
}));
const OpeningTimes = () => {

  const classes = useStyles();

  return (
    <Grid id='openingtimes' className={classes.background} container alignItems='center' justify='center'>
      <Typography color='textPrimary' variant='h3' className={classes.title}>Öffnungszeiten & Kontakt</Typography>
      {data && data.map((entry, index) => {
        const isOdd = index % 2 !== 0;
        return (
          <MediaCard key={nanoid()} {...entry} index={index} imgFirst={isOdd} />
        )
      })}
    </Grid>
  )
}

export default OpeningTimes;