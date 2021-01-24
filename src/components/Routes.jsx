import { Switch, Route } from 'react-router-dom';
import Impressum from '../pages/Impressum';
import Main from '../pages/Main';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/impressum">
                <Impressum />
            </Route>
            {/* No Match (404) */}
            <Route path="*">
                <Main />
            </Route>
        </Switch>
    )
}

export default Routes;