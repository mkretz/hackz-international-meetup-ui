import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FlatButton} from 'material-ui';
import Navigation from './navigation/navigation.jsx';
import Home from './home/home.jsx';
import ProfileContainer from './profile/profilecontainer.jsx';
import NewEvent from './newevent/newevent.jsx';
import './main.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers.jsx';

let store = createStore(reducer);

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
    <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRedirect to="/home"></IndexRedirect>
              <Route component={Navigation}>
                  <Route path="/home" component={Home}/>
                  <Route path="/profile" component={ProfileContainer}/>
              </Route>
              <Route path="/newevent" component={NewEvent}/>
          </Route>
        </Router>
    </Provider>
);

render(routes, document.getElementById('app'));
