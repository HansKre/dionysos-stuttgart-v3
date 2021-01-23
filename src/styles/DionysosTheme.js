import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

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
        },
        secondary: {
            main: '#E4A355',
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
            fontFamily: "'Caesar Dressing', cursive"
        },
        h2: {
            fontFamily: "'Caesar Dressing', cursive"
        },
        h3: {
            fontFamily: "'Caesar Dressing', cursive"
        },
        h4: {
            fontFamily: "'Caesar Dressing', cursive"
        },
        h5: {
            fontFamily: "'Caesar Dressing', cursive"
        },
    },
    // props: {
    //     MuiButton: {
    //         variant: 'contained',
    //     }
    // },
});

export default DionysosTheme;