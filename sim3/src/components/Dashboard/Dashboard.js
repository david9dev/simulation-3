import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Post from './../Post/Post';
import Form from './../Form/Form';
import Posts from './../Posts/Posts';
import Nav from './../Nav/Nav'

class Dashboard extends Component
{
    constructor()
    {
        super();
        this.state = {};
    }
    // componentDidMount()
    // {
    //     if(this.props.userid === 0)
    //     {
    //         this.props.history.push('/');
    //     }
    // }
    
    render()
    {
        if(this.props.userid === 0)
        {
            this.props.history.push('/');
        }
        return (
            <div>
                Dashboard component
                <Nav/>
                <Switch>
                    <Route path='/dashboard/post' component ={Post}/>
                    <Route path='/dashboard/form' component ={Form}/>
                    <Route pat= '/dashboard' component={Posts}/>
                </Switch>
            </div>
        )
    }
}
function mapStateToProps(duxState)
{
    return{
        userid: duxState.userid
    }
}
export default connect(mapStateToProps)(Dashboard);