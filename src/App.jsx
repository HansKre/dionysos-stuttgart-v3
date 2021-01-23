import { Grid } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Header from './Header';
import Background from './Background';
import DionysosTheme from './styles/DionysosTheme';
import Body from './Body';

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
