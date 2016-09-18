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
      tags: [],
      userTags: []
    };
  },
  componentWillMount: function() {
    firebase.database().ref('tags').once('value', function(tags) {
      this.setState({tags: tags.val()})
    }, this)
    this.bindAsArray(firebase.database().ref('events'), 'events');
    this.bindAsArray(firebase.database().ref('users/0/tags'), 'userTags');
  },
  render: function() {
    var eventNodes = this.state.events.map(function(event) {
      var userTags = this.state.userTags.map((tag) => tag['.value'])
      if (userTags.indexOf(event.tag) === -1)
        return
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
