import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import { makeStyles } from '@material-ui/styles';
import ColorButton from '../../components/ColorButton';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    paper: {
        background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 80%, rgba(255,255,255,0) 100%)',
        borderRadius: '50%',
        padding: '7%'
    },
    marginTop: {
        marginTop: '40px',
    },
}));

export default function LandingPage() {

    const classes = useStyles();
    // TODO improve shape https://css-tricks.com/the-shapes-of-css/
    return (
        <Grid id='top' container justify='center' alignItems='center' className={classes.grow} >
            <Paper className={classes.paper} elevation={0} >
                <Grid item container direction='column' justify='center' alignItems='center' className={classes.grow} >
                    <Typography color='primary' variant='h5'>Restaurant</Typography>
                    <Typography color='primary' variant='h1'>DIONYSOS</Typography>
                    <Typography color='primary' variant='h5'>Griechische Spezialitäten</Typography>
                    <ColorButton
                        withIcon={<PhoneEnabledIcon />}
                        href="tel:+49711841722"
                        className={classes.marginTop}
                    >
                        0711 / 84 17 22
                    </ColorButton>
                </Grid>
            </Paper>
        </Grid>
    )
}