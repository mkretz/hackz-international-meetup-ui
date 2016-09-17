import React from 'react';

class GoogleTranslation extends React.Component {

  constructor(props) {
    super(props);

  };

  httpGet = function (theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false );
      xmlHttp.send( null );
      return xmlHttp.responseText;
  };

  getTranslation = function (originalWorld,sourceLanguage,targetLanguage) {
      var APIKey = "AIzaSyBOS5Rpbx34LOyaWb5tKQ3aXKwaNVggdPs";
      var googleTranslatorString = "https://www.googleapis.com/language/translate/v2?key=" + APIKey + "&q=" + originalWorld + "&source=" + sourceLanguage + "&target=" + targetLanguage;
      var response = this.httpGet(googleTranslatorString);
      return response;
  };


  test = function () {
  var languages = ["en", "it", "fr"];
  var words = ["Grenze", "Schichte", "Handy"];
  var text = '';
  var ll, ww;
  var tmp;

  for (ll = 0; ll < languages.length; ll++) {
    for (ww = 0; ww < words.length; ww++) {
      tmp = JSON.parse(this.getTranslation(words[ww],"de", languages[ll]));
      text += "-----" + tmp.data.translations[0].translatedText;
      }
  }
      return text;
  };

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default GoogleTranslation;
