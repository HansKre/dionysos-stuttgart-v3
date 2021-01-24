import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import AnfahrtCard from '../components/AnfahrtCard';

import leaf1 from '../img/leaf1.png';
import leaf2 from '../img/leaf2.png';
import leaf3 from '../img/leaf3.png';
import leaf4 from '../img/leaf4.png';

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
    // leafe positions different than on OpeningTimes and CurrentInfo
    backgroundPosition: 'top 40px left -70px, bottom 30px left -57px, top -10px right -40px,bottom 10px right -40px'
    // TODO let leafes overflow into page above
  }
}));

const data = {
  header: 'So finden Sie zu uns:',
  message: 'Haldenrainstr. 126<br />Stuttgart-Rot'
}

const Anfahrt = () => {

  const classes = useStyles();

  return (
    <Grid id='anfahrt' className={classes.background} direction='column' container alignItems='center' justify='center'>
      <Typography color='textPrimary' variant='h3' className={classes.title}>Anfahrt</Typography>
      <AnfahrtCard {...data} />
    </Grid>
  )
}

export default Anfahrt;