import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FlatButton} from 'material-ui';
import './main.scss';

const App = () =>
    (
        <MuiThemeProvider>
            <div>
                <FlatButton label="Hello HackZurich" primary={true} />
            </div>
        </MuiThemeProvider>
    );

let routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
);

render(routes, document.getElementById('app'));