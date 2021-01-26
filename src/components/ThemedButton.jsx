import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    inheritFromTypo: {
        textDecoration: 'none',
        color: 'inherit'
    },
}));

export default function ThemedButton({ variant = 'h6', color = 'textSecondary', to, label }) {
    const classes = useStyles();

    return (
        <Button className={classes.menuButton}>
            <Typography color={color} variant={variant} className={classes.grow}>
                <HashLink smooth to={to} className={classes.inheritFromTypo}>{label}</HashLink>
            </Typography>
        </Button>
    );
}
