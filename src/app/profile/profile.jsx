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



  


//function(originalWord, oldLanguage, newLanguage ) {
//     return("bla")},

  storeTag: function(chosenRequest, index) {// store tag to user profile + save new tags
   if (index === -1){
	   var en = chosenRequest;

	   var fr = this.getTranslation(chosenRequest, this.state.userLang, "fr");
	   var de = this.getTranslation(chosenRequest, this.state.userLang, "de");

	index = firebase.database().ref('tags').push({
    	     en: en, fr: fr, de: de
  	   });
        }

     //firebase.database().ref('users/0').child(/tags').push({ 
	//  index: index
     //});
  },


  render: function () {
    return (
        <div>
          <AutoCompleteTags  onNewRequest={this.storeTag} />
          <ChipArray />
          <TagSelect handleClick={this.handleClick} />
          <GoogleTranslation />
        </div>
      );
    }
});

export default Profile;
