import { makeStyles } from '@material-ui/core/styles';
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
        //
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
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
                <Grid container >
                    <Grid item xs={4}>
                        <Typography color='textSecondary' variant="h4" className={classes.grow}>
                            DIONYSOS
                        </Typography>
                    </Grid>
                    <Grid item xs={8} container justify='flex-end' >
                        <Grid item>
                            <Button className={classes.menuButton}>
                                <Typography color='textSecondary' variant="h6" className={classes.grow}>
                                    <HashLink smooth to="/#openingtimes" className={classes.inheritFromTypo}>Öffnungszeiten</HashLink>
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.menuButton}>
                                <Typography color='textSecondary' variant="h6" className={classes.grow}>
                                    <HashLink smooth to="/#anfahrt" className={classes.inheritFromTypo}>Anfahrt</HashLink>
                                </Typography>
                            </Button>
                        </Grid>
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
