import {Tabs,Tab,FontIcon} from 'material-ui';
import React from 'react';
import {render} from 'react-dom';
import { withRouter } from 'react-router'

const Navigation = React.createClass({
    render: function () {
        return (
            <div>
                <Tabs>
                    <Tab onClick={() => {this.props.router.push('/home')}} label="Home"/>
                    <Tab onClick={() => {this.props.router.push('/profile')}} label="Profile"/>
                </Tabs>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default withRouter(Navigation);
