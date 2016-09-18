import React from 'react';
import { withRouter } from 'react-router'
import ReactFireMixin from 'reactfire'
import firebase from 'firebase'


import Chip from 'material-ui/Chip';

var TagSelect = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      tags: []
    };
  },
  componentWillMount: function() {
    this.bindAsArray(firebase.database().ref('tags'), 'tags');
  },
  render: function() {
    var tagList = this.state.tags.map(function (tag) {
      var key = tag['.key']
      return (
        <Chip
          style={{margin:'5px'}}
          key={key}
          onClick={(e) => this.props.handleClick(key)}
        >{tag.en}</Chip>
      );
    }, this)
    return (
      <div style={{margin:'50px'}}>
        <h3>Available Tags</h3>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {tagList}
        </div>
      </div>
    )
  }
});


export default withRouter(TagSelect);
