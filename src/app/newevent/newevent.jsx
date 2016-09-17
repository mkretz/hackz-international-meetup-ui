import React from 'react';
import AutoCompleteTags from '../components/AutoCompleteTags.jsx';
import TagCloud from '../components/TagCloud.jsx';

import TextField from 'material-ui/TextField';

const NewEvent = () =>
    (
        <div>
            <AutoCompleteTags />
            <TagCloud />
            <TextField
              hintText="Where ..."
              fullWidth={true}
            />
        </div>

    );

export default NewEvent;
