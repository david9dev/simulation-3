import React, {Component} from 'react';
import {connect} from 'react-redux'

class Dashboard extends Component
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
                Dashboard component
            </div>
        )
    }
}

export default connect()(Dashboard);