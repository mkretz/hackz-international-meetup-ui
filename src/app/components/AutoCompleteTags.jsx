import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ReactFireMixin from 'reactfire';
import firebase from 'firebase';
import _ from 'lodash';

const AutoCompleteTags = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      profile: undefined,
      tags: []
    };
  },

  componentWillMount: function() {
    this.bindAsArray(firebase.database().ref('tags'), 'tags');
    this.bindAsObject(firebase.database().ref('users/0'), 'profile');
  },

  mapAutomcompleteOptions: function () {
    return _.map(this.state.tags,(tag) => tag.en);
  },

  alreadyUsed: function (tag) {
    return _.find(this.getProfileTags(),(profileTag) => profileTag === this.state.tags.indexOf(tag));
  },

  removeAlreadyUsedOptions: function() {
    return _.filter(this.state.tags,(tag) => !this.getProfileTags().length === 0 && !this.alreadyUsed(tag));
  },

  getProfileTags: function () {
    return (this.state.profile && this.state.profile.tags ? this.state.profile.tags : [])
  },

  render: function () {
    return (
        <div>
          <AutoComplete
              hintText="Tag ..."
              dataSource={this.mapAutomcompleteOptions()}
          />
        </div>
    );
  }

});

class AutoCompleteTagsi extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Tag ..."
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    );
  }
}

export default AutoCompleteTags;
