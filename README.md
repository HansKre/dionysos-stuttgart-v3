# Description

Modern [```JAM-Stack```](http://jamstack.org) implementation of <http://dionysos-stuttgart.de>

Check it out on <https://reverent-benz-f8a629.netlify.app>

## Tech

- ```react```
- ```material-ui``` (Google's component library)
- ```material-ui/styles``` (theming and styling using ```jss```)
- ```react-router-dom``` (Routing for ```react```)
- ```react-router-hash-link``` (lets route to on-page anchor-tags)
- ```smoothscroll-polyfill``` (adds smooth scrolling to Safari)

## Development

```bash
git clone https://github.com/HansKre/dionysos-stuttgart-v3 && \
    npm install && \
    npm run start
```

## Deployment

This site is hosted on <http://netlify.com>
Pushing to ```master``` triggers a new build and when build is successful it gets deployed.

```bash
git push origin master
```

## Noteable ```material-ui``` knowledge

### Difference between ```className``` and ```classes```

- ```material-ui``` components are usually comprised of multiple components
- The outer component exposes it's styles to the outside. They are always accessible through the ```root```class
- But Google developers made styling of ```nested``` components available as well

#### Make changes to the outer component aka the ```root```

Please see the code example below for a comprehensive example.

- The ```className``` property allows overwriting the ```root``` class of the component. This changes the appearance of the outer component but has no direct effect on nested components (except hey inherit styles explicitly)
- Example: ```<Button className={classes.button}/>```

#### Make changes to nested components

- to change style of a nested component use following synthax ```<Button classes={{ iconSizeMedium: classes.inheritFontSize }}/>```
- in the above example, we use the ```classes``` property instead of the ```className``` property and specify the ```iconSizeMedium``` ```rule name``` which sets the CSS-class ```.MuiButton-iconSizeMedium```
- you can check out the [```Button-API```](https://material-ui.com/api/button/) to see all overwriteable and exposed CSS-classes of the ```Button```-component.

#### Chaining classes

To combine ('chain') multiple classes, use followin synthax:

```jsx
<Button className={`${classes.button} ${classNameFromProps} `}
```

#### Comprehenxsive example

```jsx
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
        padding: theme.spacing(2),
        fontSize: 'inherit', /* inherit from Typography */
    },
    biggerFont: {
        fontSize: "2rem",
        [theme.breakpoints.up('xs')]: {
            fontSize: "1.6rem"
        }
    },
    // https://stackoverflow.com/questions/62677833/change-size-of-starticon-endicon-material-ui
    inheritFontSize: {
        /* Styles applied to the icon element of <Button/> component if supplied and `size="medium"`. */
        "& > *:first-child": {
            fontSize: 'inherit'
        }
    }
}));
export default function ColorButton(props) {
    const { children, className: classNameFromProps, withIcon, ...otherProps } = props;
    const classes = useStyles();
    return (
        <Typography className={classes.biggerFont} color='textSecondary' variant="h6" >
            <Button
                className={`${classes.button} ${classNameFromProps} `}
                {...otherProps}
                startIcon={withIcon}
                classes={{ iconSizeMedium: classes.inheritFontSize }}
            >
                {children}
            </Button>
        </Typography>
    )
}
```

#### Theming

The root as well as the rules can be set inside a Theme globally:

```jsx
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({});

const DionysosTheme = createMuiTheme({
    // override styles (CSS)
    overrides: {
        // Style sheet name
        MuiButton: {
            // Name of the rule
            root: {
                // textTransform: 'none'
            },
            label: {
                // fontSize: "1rem"
            }
        }
    },
    // provide default props
    props: {
        MuiButton: {
            variant: 'contained',
        }
    },
    // add custom breakpoint
    breakpoints: {
        values: {
            ...breakpoints.values,
            inbetween: 780
        },
    },
});

export default DionysosTheme;
```

## Thoughts about `npm` vulnerabilities audit and `react-scripts`

### Problem

- output of `npm audit` is very polluted due to the high number of vulnerabilities of `react-scripts`. This clogs the view on other packages
- running `npm audit fix --force` unfortunately does not solve the issue

### Possible Solution

- idea: can we make `react-scripts` a `devDependency` where it does not affect the security of our app?
- if yes, we can run `yarn audit --groups "dependencies"` and `yarn audit --groups "devDependencies"` separately to see what's really going on

//TODO `react-scripts` check, if this can be a `devDependency` instead

## Backlog & Todos

1. Add tests
2. Refactor in own components
   1. Olives Background is used by multiple components: use the ```render props``` pattern
      1. MediaCard
      2. Anfahrt
      3. CurrentInfo
      4. OpeningTimes
      5. Speisekarte
      6. Impressum
      7. AnfahrtCard
3. MealCategory uses old plain html
4. Connect headless-CMS (Sanity.io or NetlifyCMS)
5. Add Markup support
