import { Grid, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Header from './Header';
import Background from './Background';
import DionysosTheme from './styles/DionysosTheme';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh'
  },
  grow: {
    flexGrow: 1
  }
}));

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={DionysosTheme} >
      <Background>
        <Grid container direction='column' className={classes.root}>
          <Header />
          <Grid item container justify='center' alignItems='center' className={classes.grow} >
            {/* TODO Name -> Dionysos*/}
            <Typography color='primary' variant='h1'>DIOGENES</Typography>
          </Grid>
        </Grid>
      </Background>
    </ThemeProvider>
  );
}

export default App;
