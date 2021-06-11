import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import MediaCard from '../../components/MediaCard';
import { nanoid } from 'nanoid';
import sanityClient from '../../utils/sanityClient';
import errorHandler from '../../utils/errorHandler';

import leaf1 from '../../img/leaf1.png';
import leaf2 from '../../img/leaf2.png';
import leaf3 from '../../img/leaf3.png';
import leaf4 from '../../img/leaf4.png';

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

  const [data, setData] = React.useState();

  const fetchOpeningTimesAndContact = React.useCallback(async () => {
    const query = `
      *[_type == "menuOrder"][0] {
        openingHours,
        contact,
      }
    `;
    try {
      const result = await sanityClient.fetch(query, {});
      setData(result)
    } catch (error) {
      errorHandler(error)
    }
  }, []);

  React.useEffect(fetchOpeningTimesAndContact, [fetchOpeningTimesAndContact]);

  return (
    <Grid id='openingtimes' className={classes.background} container alignItems='center' justify='center'>
      <Typography color='textPrimary' variant='h3' className={classes.title}>Öffnungszeiten & Kontakt</Typography>
      {data?.openingHours ? (
        <MediaCard
          key={nanoid()}
          header={data?.openingHours?.title}
          message={data?.openingHours.block}
          index={0}
          imgFirst={false} />
      ) : <></>}
      {data?.contact ? (
        <MediaCard
          key={nanoid()}
          header={data?.contact?.title}
          message={data?.contact.block}
          index={1}
          imgFirst={true} />
      ) : <></>}
    </Grid>
  )
}

export default OpeningTimes;