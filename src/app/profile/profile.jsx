import React from 'react';
import AutoCompleteTags from '../components/AutoCompleteTags.jsx';
import TagCloud from '../components/TagCloud.jsx';

import GoogleTranslation from '../components/GoogleTranslation.jsx';




import Chip from 'material-ui/Chip';
import ReactFireMixin from 'reactfire';
import firebase from 'firebase';

const ChipArray = React.createClass({
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

  handleRequestDelete : function (key) {
    firebase.database().ref('users/0/tags/' + key).remove();
  },

  renderChip: function (data) {
    return (
        <Chip
            key={this.state.profile.tags.indexOf(data)}
            style={{margin: 4}}
            onRequestDelete={() => this.handleRequestDelete(this.state.profile.tags.indexOf(data))}
        >
          {this.state.tags[data].en}
        </Chip>
    );
  },

  render: function () {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {(this.state.profile && this.state.profile.tags ? this.state.profile.tags.map(this.renderChip, this) : '')}
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

    getTranslation: function(originalWord, oldLanguage, newLanguage ) {
     return("bla")},

  storeTag: function(chosenRequest, index) {// store tag to user profile + save new tags
   if (index === -1){
	   var en = this.getTranslation(chosenRequest, this.userLang, "en");
	   var fr = this.getTranslation(chosenRequest, this.userLang, "fr");
	   var de = this.getTranslation(chosenRequest, this.userLang, "de");

	index = firebase.database().ref('tags').push({
    	     en: en, fr: fr, de: de
  	   });
        }

     //firebase.database().ref('users/0/tags').push({ 
	//  index: index
     //});
  },


  render: function () {
    return (
        <div>
          <AutoCompleteTags onNewRequest={this.storeTag}/>
          <ChipArray />
          <TagCloud />
          <GoogleTranslation />
        </div>
      );
    }
});

export default Profile;
