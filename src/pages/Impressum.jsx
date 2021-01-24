import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import leaf1 from '../img/leaf1.png';
import leaf2 from '../img/leaf2.png';
import leaf3 from '../img/leaf3.png';
import leaf4 from '../img/leaf4.png';

const useStyles = makeStyles((theme) => ({
    title: {
        alignSelf: 'center',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    background: {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${leaf1}), url(${leaf2}), url(${leaf3}), url(${leaf4})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '200px 200px',
        backgroundPosition: 'top 40px left -70px, bottom 200px left -57px, top -10px right -40px,bottom 10px right -40px'
        // TODO let leafes overflow into page above
    }
}));

const Impressum = () => {

    const classes = useStyles();

    return (
        <Grid id='impressum' className={classes.background} container alignItems='center' justify='center'>
            <Typography color='textPrimary' variant='h3' className={classes.title}>Impressum und Disclaimer</Typography>
            <Typography className={classes.flexChild}><Link to="/"> &laquo; zurück</Link></Typography>
            <Typography>{data()}</Typography>
        </Grid>
    )
}

export default Impressum;

const data = () => {
    return (
        <>
            <p>Angaben gemäß § 5 TMG:</p>
            <p>Konstantinos Alexandris<br /> Restaurant Dionysos<br /> Haldenrainstr. 126<br /> 70437 Stuttgart</p>
            <h2>Kontakt:</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Telefon:</td>
                        <td>+49 (0) 711 84 17 22</td>
                    </tr>
                    <tr>
                        <td>Telefax:</td>
                        <td>+49 (0) 711 1201474</td>
                    </tr>
                    <tr>
                        <td>E-Mail:</td>
                        <td><strong>info[at]dionysos-stuttgart.de</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br /> DE223738825</p>
            <p><span style={{ "fontSize": "12pt" }}><strong>Verantwortlich für den Inhalt nach § 55 ABS. 2 RSTV:</strong></span><br /><br />Alexandris Konstantinos<br /><br /></p>

            <p><h2>Haftungsausschluss</h2><br />1. Inhalt des Onlineangebotes<br /><br />Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.<br />Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.<br /><br /><br />2. Verweise und Links<br /><br />Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.<br />Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten /verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.<br /><br /><br />3. Urheber- und Kennzeichenrecht<br /><br />Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen.<br />Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind!<br />Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.<br /><br /><br />4. Datenschutz<br /><br />Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (Emailadressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist - soweit technisch möglich und zumutbar - auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet. Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und Faxnummern sowie Emailadressen durch Dritte zur Übersendung von nicht ausdrücklich angeforderten Informationen ist nicht gestattet. Rechtliche Schritte gegen die Versender von sogenannten Spam-Mails bei Verstössen gegen dieses Verbot sind ausdrücklich vorbehalten.<br /><br /><br />5. Rechtswirksamkeit dieses Haftungsausschlusses<br /><br />Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.</p>
        </>
    )
}