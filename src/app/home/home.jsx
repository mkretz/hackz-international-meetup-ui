import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import EventList from './eventList.jsx';

import ReactFireMixin from 'reactfire';
import firebase from 'firebase';

import { withRouter } from 'react-router'


const events = [
  {id: 1, tag: 'Fussball', time: '1293683278', place:'Technopark, Zurich'},
  {id: 2, tag: 'Fussball', time: '1293784278', place:'Technopark, Zurich'},
]



var Home = React.createClass({
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
    console.log(this.state.events)
    return (
      <div>
          <FloatingActionButton
           style={{position: 'absolute', bottom:'50px', right:'50px'}}
           onClick={() => {this.props.router.push('/newevent')}}
          >
            <ContentAdd />
          </FloatingActionButton>

          <EventList events={this.state.events} tags={this.state.tags} />
      </div>
    );
  }
});

export default withRouter(Home);
