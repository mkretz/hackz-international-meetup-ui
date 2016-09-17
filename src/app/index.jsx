import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

const App = () =>
    (
        <div>
            Hello world hackz!
        </div>
    );

let routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
);

render(routes, document.getElementById('app'));