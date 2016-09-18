import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import EventList from './eventList.jsx';

import { withRouter } from 'react-router'


var Home = React.createClass({
  render: function() {
    var lang = (this.props.params.lang !== undefined) ? this.props.params.lang : 'en'
    return (
      <div>
          <h2>{lang}</h2>
          <FloatingActionButton
           style={{position: 'absolute', bottom:'50px', right:'50px'}}
           onClick={() => {this.props.router.push('/newevent')}}
          >
            <ContentAdd />
          </FloatingActionButton>

          <EventList lang={lang}/>
      </div>
    );
  }
});

export default withRouter(Home);
