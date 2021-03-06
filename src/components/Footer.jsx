import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

// safari does not support smooth scrolling natively
// kick off the polyfill
smoothscroll.polyfill();

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(7),
    },
    flexChild: {
        marginRight: theme.spacing(1),
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.flexChild}><HashLink smooth to="/#top">Top</HashLink></Typography>
            <Typography className={classes.flexChild}><HashLink smooth to="/#currentinfo">Aktuelles</HashLink></Typography>
            <Typography className={classes.flexChild}><HashLink smooth to="/#openingtimes">Öffnungszeiten</HashLink></Typography>
            <Typography className={classes.flexChild}><HashLink smooth to="/#anfahrt">Anfahrt</HashLink></Typography>
            <Typography className={classes.flexChild}><HashLink smooth to="/#speisekarte">Speisekarte</HashLink></Typography>
            <Typography className={classes.flexChild}><Link to="/impressum">Impressum</Link></Typography>
        </div>
    );
}
