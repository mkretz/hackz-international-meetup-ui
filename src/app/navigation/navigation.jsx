import {Tabs,Tab,FontIcon} from 'material-ui';
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import { withRouter } from 'react-router'

const Navigation = (props) =>
    (
        <div>
            <Tabs>
                <Tab onClick={() => {props.router.push('/home')}} label="Home"/>
                <Tab onClick={() => {props.router.push('/profile')}} label="Profile"/>
            </Tabs>
            <div>
                {props.children}
            </div>
        </div>

    );

export default withRouter(Navigation);
