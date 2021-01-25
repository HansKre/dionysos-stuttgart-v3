import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({});
// outputs {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}

// https://github.com/HansKre/vse-guard-ui/blob/master/src/styles/DarkTheme.js
/* Hosting own Fonts:
    https://naldzgraphics.net/free-download-greek-fonts/?utm_source=naldzgraphics%2FPrjs
    https://www.1001fonts.com/greek+google-web-fonts.html
    https://blog.logrocket.com/3-ways-to-add-custom-fonts-to-your-material-ui-project/
 */
// TODO: set default colors on Typography variants? e.g. h1=main
const DionysosTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#09557E',
            light: '#50b9f2',
            dark: '#042a3f'
        },
        secondary: {
            main: '#E4A355',
            light: '#f1d1aa',
            dark: '#875315'
        },
        text: {
            primary: '#0A0E0F',
            secondary: '#FFFFFF'
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: [
            "'Open Sans', sans-serif"
        ].join(','),
        h1: {
            fontFamily: "'Caesar Dressing', cursive",
            // creates a max-width media query that targets screen sizes up to and including the given breakpoint
            [breakpoints.down('xs')]: {
                fontSize: "5rem", /* default: 6rem */
            },
            // Creates a min-width media query that targets screen sizes greater than or equal to the given breakpoint.
            // [breakpoints.up('sm')]: {
            //     width: '80vw', /* fill 80% of screen width */
            // }
        },
        h2: {
            fontFamily: "'Caesar Dressing', cursive"
        },
        h3: {
            fontFamily: "'Caesar Dressing', cursive",
            [breakpoints.down('xs')]: {
                fontSize: "1.5rem", /* default: 3rem */
            },
        },
        h4: {
            fontFamily: "'Caesar Dressing', cursive"
        },
        h5: {
            fontFamily: "'Caesar Dressing', cursive"
        },
        h6: {
            [breakpoints.down('xs')]: {
                fontSize: "1rem", /* default: 1.25rem */
            },
        }
    },
    // override styles (CSS)
    overrides: {
        // Style sheet name
        MuiButton: {
            // Name of the rule
            root: {
                // textTransform: 'none'
            },
            label: {
                // fontSize: "1rem"
            }
        }
    },
    // provide default props
    props: {
        MuiButton: {
            // variant: 'contained',
        }
    }
});

export default DionysosTheme;