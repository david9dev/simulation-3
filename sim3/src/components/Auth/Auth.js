import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateState} from './../../ducks/reducer';
import axios from 'axios';

class Auth extends Component
{
    constructor()
    {
        super();
        this.state = {
            username: "",
            password: ""
        };
    }
    componentDidMount()
    {
        // check to see if they are logged in. if not remain on the page
        // if they are logged in move them to dashboard
    }
    handleInputChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleLogin()
    {
        axios.post('/api/login', this.state).then((response) =>
        {
            const {username, profile_pic: profile, id: userid} = response.data;
            this.props.updateState({username, profile, userid})
            this.props.history.push('/dashboard')
        }).catch((error) =>
        {
            console.log("couldnt login", error.data);
        })
    }
    handleRegister()
    {
        axios.post('/api/register', this.state).then((response) =>
        {
            const {username, profile_pic: profile, id: userid} = response.data;
            this.props.updateState({username,profile, userid});
            this.props.history.push('/dashboard');
        }).catch((error) =>
        {
            console.log('couldnt register', error)
        })
    }
    render()
    {
        console.log(this.props.state)
        return (
            <div>
               Auth component
               <input placeholder='username' type="text" name="username"
               onChange={(event) => this.handleInputChange(event)}/>
               <input placeholder='password' type="password" name="password"
               onChange={(event) => this.handleInputChange(event)}/>
               <button
               onClick={() => this.handleLogin()}>login</button>
               <button
               onClick={() => this.handleRegister()}>Register</button>

            </div>
        )
    }
}

const mapDispatchToProps = {
    updateState
}
function mapStateToProps(duxState)
{
    return{
        state: duxState
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);