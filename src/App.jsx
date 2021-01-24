import { Grid } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import Background from './components/Background';
import LandingPage from './pages/LandingPage';
import CurrentInfo from './pages/CurrentInfo';
import OpeningTimes from './pages/OpeningTimes';
import Anfahrt from './pages/Anfahrt';
import Speisekarte from './pages/Speisekarte';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

import DionysosTheme from './styles/DionysosTheme';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh'
  }
}));

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={DionysosTheme} >
      <BrowserRouter>
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
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
