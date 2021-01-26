import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Image from '../img/AdobeStock_304469260.jpg';
// Cropped with iPhone 8 Plus aspect ratio 414x736 = 1:1.78 using https://croppola.com
import ImageCropped from '../img/AdobeStock_304469260_cropped.jpg';

const useStyles = makeStyles((theme) => ({
    paperWithBackground: {
        backgroundImage: `url(${ImageCropped})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${Image})`,
        },
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