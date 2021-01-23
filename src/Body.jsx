import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    }
}));

export default function Body() {

    const classes = useStyles();

    return (
        <Grid item container justify='center' alignItems='center' className={classes.grow} >
            <Typography color='primary' variant='h1'>DIONYSOS</Typography>
        </Grid>
    )
}