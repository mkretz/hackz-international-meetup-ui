import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class AutoCompleteExampleSimple extends React.Component {

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
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
        />
      </div>
    );
  }
}

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


import WordCloud from 'react-d3-cloud'

const data = {
  Fussball: 10,
  Tennis: 2,
  Wandern: 20,
  Kochen: 12,
  FahrradReparieren: 8,
  Fussball2: 10,
  Tennis2: 1,
  Wandern2: 13,
  Kochen2: 10,
  FahrradReparieren3: 8,
  Fussball3: 16,
  Tennis3: 19,
  Wandern3: 2,
  Kochen3: 1,
  FahrradReparieren3: 8,
}

const Profile = () =>
    (
        <div>
          <AutoCompleteExampleSimple />
          <ChipExampleArray />
          <WordCloud data={data} />
        </div>

    );

export default Profile;
