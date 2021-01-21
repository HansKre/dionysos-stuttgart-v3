import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        opacity: 0.4,
        background: 'white',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        opacity: 1.0,
    },
    title: {
        flexGrow: 1,
        opacity: 1.0,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                {/* TODO add Dionysos Logo*/}
                <Typography variant="h6" className={classes.title}>
                    DIONYSOS
                </Typography>
                <Button className={classes.menuButton}>
                    <Typography variant="h6" className={classes.title}>
                        MENU
                </Typography>
                </Button>
                <Button className={classes.menuButton}>
                    <Typography variant="h6" className={classes.title}>
                        CONTACTS
                </Typography>
                </Button>
                <Button className={classes.menuButton}>
                    <Typography variant="h6" className={classes.title}>
                        OUR STORY
                </Typography>
                </Button>
                <Button className={classes.menuButton}>
                    <Typography variant="h6" className={classes.title}>
                        ORDER ONLINE
                </Typography>
                </Button >
            </Toolbar>
        </AppBar>
    );
}
