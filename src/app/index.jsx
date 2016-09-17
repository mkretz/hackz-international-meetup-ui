import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FlatButton} from 'material-ui';
import Navigation from './navigation/navigation.jsx';
import Home from './home/home.jsx';
import Profile from './profile/profile.jsx';
import TagSelect from './newevent/tagselect.jsx';
import NewEvent from './newevent/newevent.jsx';
import './main.scss';

import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyDno3-cRZL-OE_-PjW_WERTIq0vjYSTkzM",
  authDomain: "international-meetup.firebaseapp.com",
  databaseURL: "https://international-meetup.firebaseio.com",
  storageBucket: "international-meetup.appspot.com",
  messagingSenderId: "1075290029033"
};
firebase.initializeApp(config);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
        <Route path="/tagselect" component={TagSelect}/>
        <Route path="/newevent/:tagID" component={NewEvent}/>
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));
