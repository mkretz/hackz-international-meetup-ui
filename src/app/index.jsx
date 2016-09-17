import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FlatButton} from 'material-ui';
import Navigation from './navigation/navigation.jsx';
import Home from './home/home.jsx';
import Profile from './profile/profile.jsx';
import NewEvent from './newevent/newevent.jsx';
import './main.scss';

const App = ({children}) =>
    (
        <MuiThemeProvider>
            <div>
                {children}
            </div>
        </MuiThemeProvider>
    );

let routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRedirect to="/home"></IndexRedirect>
          <Route component={Navigation}>
              <Route path="/home" component={Home}/>
              <Route path="/profile" component={Profile}/>
          </Route>
          <Route path="/newevent" component={NewEvent}/>
      </Route>
    </Router>
);

render(routes, document.getElementById('app'));