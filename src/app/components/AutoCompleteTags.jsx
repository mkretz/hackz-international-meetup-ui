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

  alreadyUsed: function (tag) {
    return _.find(this.getProfileTags(),(profileTag) => profileTag === this.state.tags.indexOf(tag));
  },

  removeAlreadyUsedOptions: function() {
    return _.filter(this.state.tags,(tag) => !this.getProfileTags().length === 0 && !this.alreadyUsed(tag));
  },

  getProfileTags: function () {
    return (this.state.profile && this.state.profile.tags ? this.state.profile.tags : [])
  },
  storeTag: function(chosenRequest, index) {// store tag to user profile + save new tags
   if (index === -1){
  	  var en = this.getTranslation(chosenRequest, this.userLang, "en");
  	  var fr = this.getTranslation(chosenRequest, this.userLang, "fr");
  	  var de = this.getTranslation(chosenRequest, this.userLang, "de");

    	var ref = firebase.database().ref('tags').push({
        	     en: en, fr: fr, de: de
      	   });
      index = ref['key']
      firebase.database().ref('users/0/tags').push(index)
      chosenRequest = ''
    }
    else {

      var tag = this.state.tags[Object.keys(this.state.tags)[index]]['.key']

      console.log(tag)
      firebase.database().ref('users/0/tags').push(tag)
    }

  },
  getTranslation: function(originalWord, oldLanguage, newLanguage ) {
   return(originalWord)},

  render: function () {
    return (
        <div>
          <AutoComplete
              hintText="Tag ..."
              dataSource={this.state.tags}
              dataSourceConfig={{text: 'en', value: '.key'}}
	      onNewRequest={this.storeTag}
          />
        </div>
    );
  }

});

export default AutoCompleteTags;
