import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { HashLink } from 'react-router-hash-link';

/* if opacity: 0.55, background: 'black' is used on on parent,
all child elements inherit opacity. Instead, use rgba
to set opacity on elements individually*/
const OPACITY = 0.55;
const useStyles = makeStyles((theme) => ({
    appBar: {
        background: `rgba(0,0,0, ${OPACITY})`
    },
    toolBar: {
        // creates a max-width media query that targets screen sizes up to and including the given breakpoint
        [theme.breakpoints.down('xs')]: {
            paddingRight: 0
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    inheritFromTypo: {
        textDecoration: 'none',
        color: 'inherit'
    },
}));

export default function Header() {
    const classes = useStyles();

    const theme = useTheme();
    const overSm = useMediaQuery(theme.breakpoints.up('sm'));
    const over780 = useMediaQuery('@media (min-width:780px');
    // outputs {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}

    return (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Grid container >
                    <Grid item xs={4}>
                        <Typography color='textSecondary' variant="h4" className={classes.grow}>
                            DIONYSOS
                        </Typography>
                    </Grid>
                    <Grid item xs={8} container justify='flex-end' >
                        {over780 && <Grid item>
                            <Button className={classes.menuButton}>
                                <Typography color='textSecondary' variant="h6" className={classes.grow}>
                                    <HashLink smooth to="/#openingtimes" className={classes.inheritFromTypo}>Öffnungszeiten</HashLink>
                                </Typography>
                            </Button>
                        </Grid>}
                        {overSm && <Grid item>
                            <Button className={classes.menuButton}>
                                <Typography color='textSecondary' variant="h6" className={classes.grow}>
                                    <HashLink smooth to="/#anfahrt" className={classes.inheritFromTypo}>Anfahrt</HashLink>
                                </Typography>
                            </Button>
                        </Grid>}
                        <Grid item>
                            <Button className={classes.menuButton}>
                                <Typography color='secondary' variant="h6" className={classes.grow}>
                                    <HashLink smooth to="/#speisekarte" className={classes.inheritFromTypo}>Speisekarte</HashLink>
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
