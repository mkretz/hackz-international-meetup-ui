import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import EventList from './eventList.jsx';

import { withRouter } from 'react-router'


var Home = React.createClass({
  render: function() {
    return (
      <div>
          <FloatingActionButton
           style={{position: 'absolute', bottom:'50px', right:'50px'}}
           onClick={() => {this.props.router.push('/tagselect')}}
          >
            <ContentAdd />
          </FloatingActionButton>

          <EventList />
      </div>
    );
  }
});

export default withRouter(Home);
