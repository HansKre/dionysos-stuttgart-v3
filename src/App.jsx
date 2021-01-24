import { Grid } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import Background from './components/Background';
import LandingPage from './pages/LandingPage';
import CurrentInfo from './pages/CurrentInfo';

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
      <Header />
      <Background>
        <Grid container direction='column' className={classes.root}>
          <LandingPage />
        </Grid>
      </Background>
      <CurrentInfo />
    </ThemeProvider>
  );
}

export default App;
