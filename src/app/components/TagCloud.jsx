import React from 'react';
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

class TagCloud extends React.Component {
  render() {
    return (
      <div>
        <WordCloud data={data} />
      </div>
    );
  }
}

export default TagCloud;
