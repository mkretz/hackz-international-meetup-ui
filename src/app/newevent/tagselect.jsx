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
    firebase.database().ref('tags').once('value', (data) => this.setState({tags: data.val()}), this);
  },
  render: function() {
    var tagList = this.state.tags.map(function (tag) {
      var key = tag['.key']
      console.log(tag)
      return (
        <Chip
          key={key}
          onClick={(e) => this.props.router.push('/newevent/'+key)}
        >{tag.en}</Chip>
      );
    }, this)
    return (<div>{tagList}</div>)
  }
});


export default withRouter(TagSelect);
