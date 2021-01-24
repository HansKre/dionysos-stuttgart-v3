import { data } from '../src/data/openingTimes';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  //
}));

const OpeningTimes = () => {

  const classes = useStyles();

  return (
    <>
      <h1>Unsere Öffnungszeiten</h1>
      <p>Hier finden Sie unsere Öffnungszeiten</p>
      {
        data &&
        <p dangerouslySetInnerHTML={{ __html: data.oeffnungszeiten }} />
      }
    </>
  )
}

export default OpeningTimes;