import { Grid } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import Background from './components/Background';
import Body from './components/Body';
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
      <Background>
        <Grid container direction='column' className={classes.root}>
          <Header />
          <Body />
        </Grid>
      </Background>
    </ThemeProvider>
  );
}

export default App;
