import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';



import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';





const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};




const style = {
  marginRight: 20,
};



const Home = () =>
    (

    <div>

        <FloatingActionButton style={{float:'right'}}>
          <ContentAdd />
        </FloatingActionButton>

        <List>
          <ListItem
            primaryText="Fussball"
            secondaryText={
            <p>
              25.5.2019 <br/> Technopark, Zurich
            </p>
            }
            secondaryTextLines={2}
          />
          <ListItem
              primaryText="Fussball"
              secondaryText={
              <p>
                25.5.2019 <br/> Technopark, Zurich
              </p>
            }
            secondaryTextLines={2}
          />
        </List>
        
    </div>
    );

export default Home;
