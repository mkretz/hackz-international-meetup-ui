import React from 'react';

import Event from './event.jsx';

import {List} from 'material-ui';

class EventList extends React.Component {
  render() {
    var eventNodes = this.props.events.map(function(event) {
        return (
          <Event key={event.$id} tags={this.props.tags} {...event} />
        );
      }, this);
    return (
      <List>
        {eventNodes}
      </List>
    );
  }
}

export default EventList;
