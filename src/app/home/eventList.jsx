import React from 'react';

import Event from './event.jsx';

import ReactFireMixin from 'reactfire';
import firebase from 'firebase';

import {List} from 'material-ui';

var EventList = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      events: [],
      tags: []
    };
  },
  componentWillMount: function() {
    this.bindAsArray(firebase.database().ref('tags'), 'tags');
    this.bindAsArray(firebase.database().ref('events'), 'events');
  },
  render: function() {
    var eventNodes = this.state.events.map(function(event, i, events) {
        return (
          <Event key={event['.key']} {...event} tag={this.state.tags[event.tag].en} />
        );
      }, this);
    return (
      <List>
        {eventNodes}
      </List>
    );
  }
});

export default EventList;
