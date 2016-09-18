import React from 'react';
import AutoCompleteTags from '../components/AutoCompleteTags.jsx';
import TagSelect from '../components/TagSelect.jsx'

import ReactFireMixin from 'reactfire'
import firebase from 'firebase'

import {TextField, TimePicker, DatePicker, RaisedButton} from 'material-ui'
import { withRouter } from 'react-router'

const buttonStyle = {
  margin: 12,
};

var NewEvent = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      place: undefined,
      date: undefined,
      time: undefined,
      tag: this.props.params['tagID']
    };
  },
  addEvent: function() {
    var time = this.state.date
    time.setHours(this.state.time.getHours())
    time.setMinutes(this.state.time.getMinutes())
    firebase.database().ref('events').push({place: this.state.place, tag: this.state.tag, time: time.getTime()/1000.})
    this.props.router.push('/')
  },
  handleClick: function(key) {
    this.setState({tag: key})
  },
  render: function() {
    if (this.state.tag === undefined) {
      return (<TagSelect handleClick={this.handleClick} />)
    }
    else {
      return (
          <div>
            <TextField
              hintText="Where ..."
              onChange={(e) => this.setState({place: e.target.value})}
            />
            <DatePicker
              hintText="Date ..."
              autoOk={true}
              onChange={(e, date) => this.setState({date: date})}
            />
            <TimePicker
              format="24hr"
              hintText="Time ..."
              autoOk={true}
              onChange={(e, date) => this.setState({time: date})}
            />

            <RaisedButton
              label="Submit" primary={true} style={buttonStyle}
              onClick={() => {this.addEvent()}}
            />
            <RaisedButton
              label="Cancel" secondary={true} style={buttonStyle}
              onClick={() => {this.props.router.push('/')}}
            />
          </div>
        )
      }
    }
})

export default withRouter(NewEvent);
