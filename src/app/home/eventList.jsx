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
      tags: {}
    };
  },
  componentWillMount: function() {
    firebase.database().ref('tags').once('value', function(tags) {
      this.setState({tags: tags.val()})
    }, this)
    this.bindAsArray(firebase.database().ref('events'), 'events');
  },
  render: function() {
    if (this.state.tags.length == 0)
     return
    var eventNodes = this.state.events.map(function(event) {
      var tag = this.state.tags[event.tag]
      if (tag !== undefined)
      {
        return <Event{...event} key={event['.key']} tag={tag.en} />
      }
    }, this)
    return (
      <List>
        {eventNodes}
      </List>
    );
  }
});

export default EventList;
