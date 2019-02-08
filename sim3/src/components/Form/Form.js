import React, {Component} from 'react';
import {connect} from 'react-redux';

class Form extends Component
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
                Form component
            </div>
        )
    }
}

export default connect()(Form);