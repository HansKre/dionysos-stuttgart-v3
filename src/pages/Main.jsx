import { Grid } from '@material-ui/core';
import Header from './main/Header';
import Background from '../components/Background';
import LandingPage from './main/LandingPage';
import CurrentInfo from './main/CurrentInfo';
import OpeningTimes from './main/OpeningTimes';
import Anfahrt from './main/Anfahrt';
import Speisekarte from './main/Speisekarte';
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
