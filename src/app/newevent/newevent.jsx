import React from 'react';
import AutoCompleteTags from '../components/AutoCompleteTags.jsx';
import TagCloud from '../components/TagCloud.jsx';

import {TextField, TimePicker, DatePicker, RaisedButton} from 'material-ui'
import { withRouter } from 'react-router'

const buttonStyle = {
  margin: 12,
};

const NewEvent = (props) =>
    (
        <div>
          <TextField
            hintText="Where ..."
          />
          <DatePicker hintText="Date ..." />
          <TimePicker
            format="24hr"
            hintText="Time ..."
          />
          <AutoCompleteTags />
          <TagCloud />

          <RaisedButton
            label="Submit" primary={true} style={buttonStyle}
            onClick={() => {props.router.push('/')}}
          />
          <RaisedButton
            label="Cancel" secondary={true} style={buttonStyle}
            onClick={() => {props.router.push('/')}}
          />
        </div>

    );

export default withRouter(NewEvent);
