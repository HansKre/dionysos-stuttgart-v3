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
      backgroundPosition: 'top 60px left -110px, bottom 200px left -57px, top -30px right -110px, bottom 150px right -40px',
    }
    // TODO let leafes overflow into page above
  }
}));
const CurrentInfo = () => {

  const classes = useStyles();

  const [data, setData] = React.useState();

  const fetchCurrentInfo = React.useCallback(async () => {
    const query = `
      *[_type == "currentInfo"]{
        _id,
        header,
        date,
        message
      }
    `;
    try {
      const result = await sanityClient.fetch(query, {});
      setData(result)
    } catch (error) {
      errorHandler(error)
    }
  }, []);

  React.useEffect(fetchCurrentInfo, [fetchCurrentInfo]);

  const compareFn = (a, b) => {
    if (a?.date && b?.date) {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0; // equal
    }
    return 1;
  }

  return (
    <Grid id='currentinfo' className={classes.background} container alignItems='center' justify='center'>
      <Typography color='textPrimary' variant='h3' className={classes.title}>Aktuelle Informatioinen</Typography>
      {/* map in reversed order to show newest info first */}
      {data && data?.sort(compareFn).map((entry, index) => {
        const isOdd = index % 2 !== 0;
        return (
          <MediaCard key={nanoid()} {...entry} index={index} imgFirst={isOdd} />
        )
      })}
    </Grid>
  )
}

export default CurrentInfo;