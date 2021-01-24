import { makeStyles } from '@material-ui/styles';

import leaf1 from '../img/leaf1.png';
import leaf2 from '../img/leaf1.png';
import leaf3 from '../img/leaf1.png';
import leaf4 from '../img/leaf1.png';

const useStyles = makeStyles((theme) => ({
    background: {
        position: 'relative',
        width: '100%',
        height: '100%',
        top: 200,
        left: -76,
    }
}));

export default function OlivesBackground() {
    const classes = useStyles();
    return (
        <div className={classes.background}><img alt="leaf" src={leaf1} height="200px" width="200px"></img></div>
        // <> </>
    )
}
