import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ReactFireMixin from 'reactfire';
import firebase from 'firebase';
import _ from 'lodash';

const AutoCompleteTags = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      userLang: "en",
      profile: undefined,
      tags: []
    };
  },

 httpGet: function (theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false );
      xmlHttp.send( null );
      return (xmlHttp.responseText)
  },

  getTranslation: function (originalWorld,sourceLanguage,targetLanguage) {
      var APIKey = "AIzaSyBOS5Rpbx34LOyaWb5tKQ3aXKwaNVggdPs";
      var googleTranslatorString = "https://www.googleapis.com/language/translate/v2?key=" + APIKey + "&q=" + originalWorld + "&source=" + sourceLanguage + "&target=" + targetLanguage;

       var asd = this.httpGet(googleTranslatorString);
       var tmp = JSON.parse(asd);
       return (tmp.data.translations[0].translatedText);


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
  	  var en = chosenRequest;
  	  var fr = this.getTranslation(chosenRequest, this.state.userLang, "fr");
  	  var de = this.getTranslation(chosenRequest, this.state.userLang, "de");

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
