import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import DionysosTheme from './styles/DionysosTheme';
import Routes from './components/Routes';
import Footer from './components/Footer';

function App() {

  return (
    <ThemeProvider theme={DionysosTheme} >
      <BrowserRouter>
        <Routes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
