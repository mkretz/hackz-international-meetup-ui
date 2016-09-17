import React from 'react';
import AutoCompleteTags from '../components/AutoCompleteTags.jsx';
import TagCloud from '../components/TagCloud.jsx';

import GoogleTranslation from '../components/GoogleTranslation.jsx';




import Chip from 'material-ui/Chip';

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onTouchTap` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
class ChipExampleArray extends React.Component {

  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'Fussball'},
      {key: 1, label: 'Tennis'},
      {key: 2, label: 'Web Development'},
      {key: 3, label: 'Fahhrad reparieren'},
    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete = (key) => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    );
  }
}


import TextField from 'material-ui/TextField';

import FlatButton from 'material-ui/FlatButton';

const Profile = () =>
    (
        <div>
          <AutoCompleteTags />
          <ChipExampleArray />
          <TagCloud />
          <GoogleTranslation />
        </div>

    );

export default Profile;
