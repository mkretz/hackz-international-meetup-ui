import React from 'react';
import AutoCompleteTags from '../components/AutoCompleteTags.jsx';
import TagCloud from '../components/TagCloud.jsx';

import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 12,
};

const NewEvent = () =>
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

          <RaisedButton label="Submit" primary={true} style={buttonStyle} />
          <RaisedButton label="Cancel" secondary={true} style={buttonStyle} />
        </div>

    );

export default NewEvent;
