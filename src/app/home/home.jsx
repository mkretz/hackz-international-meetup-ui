import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import EventList from './eventList.jsx';

import { withRouter } from 'react-router'


const events = [
  {id: 1, tag: 'Fussball', time: '1293683278', place:'Technopark, Zurich'},
  {id: 2, tag: 'Fussball', time: '1293784278', place:'Technopark, Zurich'},
]

const Home = (props) =>
    (
    <div>
        <FloatingActionButton
         style={{position: 'absolute', bottom:'50px', right:'50px'}}
         onClick={() => {props.router.push('/newevent')}}
        >
          <ContentAdd />
        </FloatingActionButton>

        <EventList events={events} />
    </div>
    );

export default withRouter(Home);
