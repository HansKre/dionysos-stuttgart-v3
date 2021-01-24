import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { nanoid } from 'nanoid';

import MealCategory from '../components/MealCategory';

import leaf1 from '../img/leaf1.png';
import leaf2 from '../img/leaf2.png';
import leaf3 from '../img/leaf3.png';
import leaf4 from '../img/leaf4.png';

import { data } from '../data/speisekarte';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      width: '100vw' /* fill 100% of screen width */
    },
    [theme.breakpoints.up('sm')]: {
      width: '80vw', /* fill 80% of screen width */
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  title: {
    alignSelf: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  background: {
    backgroundImage: `url(${leaf1}), url(${leaf2}), url(${leaf3}), url(${leaf4})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200px 200px',
    backgroundPosition: 'top 40px left -70px, bottom 200px left -57px, top -10px right -40px,bottom 10px right -40px'
    // TODO let leafes overflow into page above
  },
  flexColumn: {
    flexDirection: 'column'
  },
  grow: {
    flex: 'auto'
  },
  marginTop: {
    marginTop: theme.spacing(1),
  }
}));

const Speisekarte = () => {

  const classes = useStyles();

  const fillMealCategories = () => {
    if (data && data.categories) {
      const mappedJSX = data.categories.map((mealCategory, index) => {
        return (
          <Accordion key={nanoid()} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography className={classes.heading}>{mealCategory.category}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.flexColumn}>
              <Typography className={classes.grow}>
                <MealCategory mealCategory={mealCategory} />
              </Typography>
              <Typography variant='subtitle2' className={classes.marginTop}>
                Alle Preise in € und inklusive 7% Mehrwertsteuer.
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })
      return mappedJSX;
    } else {
      return <br />
    }
  }

  const fillZusatzStoffeUAllergene = () => {
    return (
      <Accordion key={nanoid()} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${nanoid()}a-content`}
          id={`panel${nanoid()}a-header`}
        >
          <Typography className={classes.heading}>Zusatzstoffe- und Allergenekennzeichnung</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>Zusatzstoffe</h4>
            <ol>
              {data && data.zusatzstoffe && data.zusatzstoffe.map((entry, index) => {
                return (
                  <li key={index}>{entry}</li>
                );
              })}
            </ol>
            <h4>Allergene</h4>
            <ol type='a'>
              {data && data.allergene && data.allergene.map((entry, index) => {
                return (
                  <li key={index}>{entry}</li>
                );
              })}
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
  }
  return (
    <Grid id='speisekarte' className={classes.background} container alignItems='center' justify='center'>
      <Typography color='textPrimary' variant='h3' className={classes.title}>Unsere Speisekarte</Typography>

      <div className={classes.root}>
        {fillMealCategories()}
        {fillZusatzStoffeUAllergene()}
      </div>
    </Grid>
  );
}

export default Speisekarte;