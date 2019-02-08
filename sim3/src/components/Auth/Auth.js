import React, {Component} from 'react';
import {connect} from 'react-redux'

class Auth extends Component
{
    constructor()
    {
        super();
        this.state = {};
    }
    render()
    {
        return (
            <div>
                component
            </div>
        )
    }
}

export default connect()(Auth);