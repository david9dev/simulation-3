import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
// import {connect} from 'react-redux';
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
   
    
    render()
    {
        return (
            <div>
                Dashboard component
                <Nav/>
                <Switch>
                    <Route path='/dashboard/post' component ={Post}/>
                    <Route path='/dashboard/form' component ={Form}/>
                    <Route pat= '/dashboard/' component={Posts}/>
                </Switch>
            </div>
        )
    }
}
export default Dashboard;