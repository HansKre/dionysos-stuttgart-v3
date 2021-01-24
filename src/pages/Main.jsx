import { Grid } from '@material-ui/core';
import Header from '../components/Header';
import Background from '../components/Background';
import LandingPage from './LandingPage';
import CurrentInfo from './CurrentInfo';
import OpeningTimes from './OpeningTimes';
import Anfahrt from './Anfahrt';
import Speisekarte from './Speisekarte';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh'
    }
}));

export default function Main() {

    const classes = useStyles();

    return (
        <>
            <Header />
            <Background>
                <Grid container direction='column' className={classes.root}>
                    <LandingPage />
                </Grid>
            </Background>
            <CurrentInfo />
            <OpeningTimes />
            <Anfahrt />
            <Speisekarte />
        </>
    )
}
