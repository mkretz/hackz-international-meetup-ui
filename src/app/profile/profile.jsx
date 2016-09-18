import React from 'react';
import AutoCompleteTags from '../components/AutoCompleteTags.jsx';

import GoogleTranslation from '../components/GoogleTranslation.jsx';
import TagSelect from '../components/TagSelect.jsx';




import Chip from 'material-ui/Chip';
import ReactFireMixin from 'reactfire';
import firebase from 'firebase';

const ChipArray = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      tags: undefined,
      profile: undefined,
      profileTags: []
    };
  },

  componentWillMount: function() {
    firebase.database().ref('tags').on('value', function(tags) {
      this.setState({tags: tags.val()})
    }, this)
    this.bindAsArray(firebase.database().ref('users/0/tags'), 'profileTags');
  },

  handleRequestDelete : function (key) {
    firebase.database().ref('users/0/tags/' + key).remove();
  },

  renderChip: function (data) {
    var tag = this.state.tags[data['.value']]
    if (tag !== undefined)
    {
      return (
          <Chip
              key={data['.key']}
              style={{margin: 4}}
              onRequestDelete={() => this.handleRequestDelete(data['.key'])}
          >
            {tag.en}
          </Chip>
      );
    }
  },

  render: function () {
    console.log(this.state.tags)
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {this.state.profileTags.map(this.renderChip, this)}
        </div>
    );
  }

});

const Profile = React.createClass({

  getInitialState: function() {
    return {
      userLang: "en",
    };
  },
  handleClick: function(key) {
    firebase.database().ref('users/0/tags').push(key)
  },



  render: function () {
    return (
        <div>
          <AutoCompleteTags />
          <ChipArray />
          <TagSelect handleClick={this.handleClick} />
          <GoogleTranslation />
        </div>
      );
    }
});

export default Profile;
