import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateState} from './../../ducks/reducer'
function Nav(props)
{
    console.log(props);
    function handleLogout()
    {
        axios.post('/api/logout').then((response) =>
        {
            console.log(response.data);
            props.updateState({
                username: "",
                profile: "",
                userid: 0
            })
        })
    }
    return(
        <div>
            nav component
            <button
            onClick={() => handleLogout()}>logout</button>
        </div>
    )
}
const mapDispatchToProps = {
    updateState
}
export default connect(null, mapDispatchToProps)(Nav);