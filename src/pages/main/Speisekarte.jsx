import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { nanoid } from 'nanoid';
import sanityClient from '../../utils/sanityClient';
import errorHandler from '../../utils/errorHandler';

import MealCategory from './speisekarte/MealCategory';

import leaf1 from '../../img/leaf1.png';
import leaf2 from '../../img/leaf2.png';
import leaf3 from '../../img/leaf3.png';
import leaf4 from '../../img/leaf4.png';

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
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${leaf1}), url(${leaf2}), url(${leaf3}), url(${leaf4})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200px 200px',
    backgroundPosition: 'top 40px left -70px, bottom 200px left -57px, top -10px right -40px, bottom 10px right -40px',
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: 'top 60px left -80px, bottom 200px left -57px, top -30px right -90px, bottom 150px right -40px',
    },
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

  const [data, setData] = React.useState();

  const fetchMealCategories = React.useCallback(async () => {
    const query = `
      *[_type == "menuOrder"][0] {
        allergene,
        zusatzstoffe,
        menuOrder[]->{
          _id
        },
        "mealCategories": *[_type == "category"]{
          _id,
          category,
          categoryDetails,
          categoryMeals,
        }
      }
    `;
    try {
      const result = await sanityClient.fetch(query, {});
      setData(result)
    } catch (error) {
      errorHandler(error)
    }
  }, [])

  React.useEffect(fetchMealCategories, [fetchMealCategories]);

  const mealCategoriesJsx = () => {
    if (data?.menuOrder && data?.mealCategories) {
      const { menuOrder, mealCategories } = data;
      // sort
      const orderedMealCategories = [];
      menuOrder.forEach(menuCategory => {
        const result = mealCategories.find(category => category._id === menuCategory._id);
        if (result) orderedMealCategories.push(result)
      });
      // add missing categories
      const missingCategories = mealCategories.filter(category => !orderedMealCategories.find(orderedCategory => orderedCategory._id === category._id));
      orderedMealCategories.push(...missingCategories);
      // map
      return orderedMealCategories.map((mealCategory, index) => {
        return (
          <Accordion key={mealCategory._id} >
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
    } else {
      return <br />
    }
  }

  const zusatzStoffeUAllergeneJsx = () => {
    const { zusatzstoffe, allergene } = data || {};
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
              {zusatzstoffe && zusatzstoffe.map((entry, index) => {
                return (
                  <li key={index}>{entry}</li>
                );
              })}
            </ol>
            <h4>Allergene</h4>
            <ol type='a'>
              {allergene && allergene.map((entry, index) => {
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
        {mealCategoriesJsx()}
        {zusatzStoffeUAllergeneJsx()}
      </div>
    </Grid>
  );
}

export default Speisekarte;