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

    // Button would have been created with startIcon prop
    // like that: <Button startIcon={<PhoneEnabledIcon style={{ fontSize: '2rem' }/>} />
    // We let our component receive the icon as prop, that way, we can set the icon easily
    // But since the user doesn't know about our internals like fontSize
    // We do not want the user to set the fontSize on the icon when passing it in
    // Propblem: how do we set the fontSize on the icon?
    // props is immuteable, so following won't work:
    // iconFromProps.props.style = { fontSize: '2rem'}
    // For that, React lets you create a clone of the element,
    // adding in props like that:

    // let startIcon = '';
    if (withIcon) {
        // We need to set fontsize on the icon
        // reason is: <Button/> component has a built-in default css-class 'iconSizeMedium'
        // it is setting font-size on the Icon to 20px

        // option 1: setting the fontSize through the style property
        // let iconWithFontSize = React.cloneElement(withIcon, { style: { fontSize: '2rem' } });

        // option 2: overwriting the nested fontSizeLarge class and setting it by fontSize='large'
        // let iconWithFontSize = React.cloneElement(withIcon, { classes: { fontSizeLarge: classes.icon }, fontSize: 'large' });

        // option 3: let it inherit font settings.
        // let iconWithFontSize = React.cloneElement(withIcon, { fontSize: 'inherit' });
        // startIcon = iconWithFontSize;

        /*
        The reason why all of the above methods don't work but
        setting the fontSize on the button directly does:

        when the Button is created, the fontSize is set through
        the fontSizeLarge class. This class seems to be appliead last
        so it has the highest specificy and takes precedes over
        all previous settings. While when user sets <Button styles={{fontSize={12}}}/>
        it is the last setting.
        */
    }

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