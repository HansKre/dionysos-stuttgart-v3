import { Grid } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import Background from './components/Background';
import Body from './components/Body';
import CurrentInfo from './components/CurrentInfo';
// import OpeningTimes from './components/OpeningTimes';
// import Reservieren from './components/Reservieren';
// import Anfahrt from './components/Anfahrt';

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
          <Body />
        </Grid>
      </Background>
      <CurrentInfo />
      {/* <OpeningTimes />
      <Reservieren />
      <Anfahrt /> */}
    </ThemeProvider>
  );
}

export default App;
