import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import EventList from './eventList.jsx';

import { Link, withRouter } from 'react-router'


var Home = React.createClass({
  render: function() {
    var lang = (this.props.params.lang !== undefined) ? this.props.params.lang : 'en'
    return (
      <div>
          <FloatingActionButton
           style={{position: 'absolute', bottom:'50px', right:'50px'}}
           onClick={() => {this.props.router.push('/newevent')}}
          >
            <ContentAdd />
          </FloatingActionButton>

          <EventList lang={lang}/>
          <Link to="/home/en">en</Link> | <Link to="/home/de">de</Link> | <Link to="/home/fr">fr</Link>
      </div>
    );
  }
});

export default withRouter(Home);
