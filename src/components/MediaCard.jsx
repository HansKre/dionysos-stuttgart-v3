import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import img0 from '../img/jeroen-den-otter-HlxuCe2pkJU-unsplash.jpg';
import img1 from '../img/clark-van-der-beken-POUMjDlf9GM-unsplash.jpg';
import img2 from '../img/dragos-gontariu--MNHB_nZjiA-unsplash.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '250px',
        // creates a max-width media query that targets screen sizes up to and including the given breakpoint
        [theme.breakpoints.down('xs')]: {
            width: '100vw' /* fill 100% of screen width */
        },
        // Creates a min-width media query that targets screen sizes greater than or equal to the given breakpoint.
        [theme.breakpoints.up('sm')]: {
            width: '80vw', /* fill 80% of screen width */
        },
        marginBottom: theme.spacing(5),
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 2 /* 66% of the width */
    },
    containerContent: {
        flex: '1 1 auto',
    },
    img: {
        flex: 1 /* 34% of the width */
    },
    message: {
        marginTop: theme.spacing(5),
    }
}));

const images = [
    img0, img1, img2
]

export default function MediaCard({ header, date, message, index, imgFirst }) {
    const classes = useStyles();

    const theImg = () => (
        <CardMedia
            className={classes.img}
            image={images[index % images.length]}

        />
    )

    return (
        <Card className={classes.root}>
            {imgFirst && theImg()}
            <div className={classes.textContainer}>
                <CardContent className={classes.containerContent}>
                    <Typography component="h5" variant="h6">
                        {header}
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                        {date}
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary"
                        className={classes.message}
                        dangerouslySetInnerHTML={{ __html: message }}
                    ></Typography>
                </CardContent>
            </div>
            {!imgFirst && theImg()}
        </Card>
    );
}
