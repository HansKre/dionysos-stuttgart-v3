import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Image from '../img/AdobeStock_304469260.jpg'; // Import using relative path

const useStyles = makeStyles((theme) => ({
    paperWithBackground: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        maxWidth: '100vw'
    }
}));

export default function Background(props) {

    const classes = useStyles();

    return (
        <Paper className={classes.paperWithBackground}>
            {props.children}
        </Paper>
    )
}