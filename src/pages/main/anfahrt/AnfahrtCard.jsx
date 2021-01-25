import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DirectionsIcon from '@material-ui/icons/Directions';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '250px',
        [theme.breakpoints.down('xs')]: {
            width: '100vw' /* fill 100% of screen width */
        },
        [theme.breakpoints.up('sm')]: {
            width: '80vw', /* fill 80% of screen width */
        },
        marginBottom: theme.spacing(5),
    },
    gridText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', /* x-direction */
    },
    cardContentText: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', /* x-direction */
        justifyContent: 'space-between', /* y-direction */
    },
    message: {
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        },
    },
    cardContentIframe: {
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0
        }
    },
    iframe: {
        border: 0,
        width: '100%',
        minHeight: '40vh'
    },
    grow: {
        flex: '1 0 auto'
    },
    bold: {
        fontWeight: 700
    },
    button: {
        marginBottom: '3px' /* align with iframe; for some reason, i-frame is a little bit higher else */
    }
}));

export default function AnfahrtCard({ header, message }) {
    const classes = useStyles();

    const theme = useTheme();
    const largerThanSm = useMediaQuery(theme.breakpoints.up('sm'));

    const routeButton = () => {
        return (
            <Button
                variant="contained"
                color="primary"
                startIcon={<DirectionsIcon />}
                href="https://www.google.de/maps/place/Haldenrainstra%C3%9Fe+126,+70437+Stuttgart/@48.8318328,9.1907691,17z/data=!3m1!4b1!4m2!3m1!1s0x4799daa8d60c8db3:0x6134c1447a493bd3"
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                className={classes.button}
            >
                <Typography color='textSecondary' variant="h6">Route berechnen</Typography>
            </Button>
        )
    }

    return (
        <Card className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={6} className={classes.gridText}>
                    <CardContent className={classes.cardContentText}>
                        <Typography component="h5" variant="h6" className={classes.bold}>
                            {header}
                        </Typography>
                        <Typography variant="subtitle2" color="textPrimary"
                            className={classes.message}
                            dangerouslySetInnerHTML={{ __html: message }}
                        ></Typography>
                        {largerThanSm && routeButton()}
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardContent className={classes.iframeCard} >
                        <iframe className={classes.iframe}
                            title='anfahrtGoogleMaps'
                            src="https://maps.google.com/maps?q=Haldenrainstr.%20126%20Stuttgart&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            allowFullScreen
                            crossOrigin="anonymous">
                        </iframe>
                    </CardContent>
                </Grid>
                {!largerThanSm && (
                    <CardActions className={classes.grow}>
                        {routeButton()}
                    </CardActions>
                )}
            </Grid>
        </Card>
    );
}
