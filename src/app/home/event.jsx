import React from 'react';

import {ListItem} from 'material-ui';

class Event extends React.Component {
  render() {
    console.log(this.props.time*1000)
    var date = new Date(this.props.time*1000)
    return (
      <ListItem
        primaryText={this.props.tags[this.props.tag].en}
        secondaryText={
          <p>
            {date.toLocaleString()} <br/> {this.props.place}
          </p>
        }
        secondaryTextLines={2}
      />
    );
  }
}

export default Event;
