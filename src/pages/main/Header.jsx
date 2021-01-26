import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ThemedButton from '../../components/ThemedButton';

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
}));

export default function Header() {
    const classes = useStyles();

    const theme = useTheme();
    // outputs {xs: 0, sm: 600, inbetween: 780, md: 960, lg: 1280, xl: 1920}
    const overSm = useMediaQuery(theme.breakpoints.up('sm'));
    const overInbetween = useMediaQuery(theme.breakpoints.up('inbetween'));

    return (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Grid container >
                    <Grid item xs={4}>
                        <Typography color='textSecondary' variant="h4">
                            DIONYSOS
                        </Typography>
                    </Grid>
                    <Grid item xs={8} container justify='flex-end' >
                        {overInbetween && <ThemedButton to='/#openingtimes' label='Öffnungszeiten' />}
                        {overSm && <ThemedButton to='/#anfahrt' label='Anfahrt' />}
                        <ThemedButton color='secondary' to='/#speisekarte' label='Speisekarte' />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
