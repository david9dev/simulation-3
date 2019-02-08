import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom'
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
            props.history.push('/');
        })
    }
    return(
        <div>
            profile {props.profile}
            {props.username}
            <Link to='/dashboard' ><button>home</button></Link>
            <Link to='/dashboard/form' ><button>new message</button></Link>
            <button
            onClick={() => handleLogout()}>logout</button>
        </div>
    )
}
function mapStatetoProps(duxState)
{
    const {username, profile} = duxState
    return{
        username,
        profile
    }
}
const mapDispatchToProps = {
    updateState
}
export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Nav));