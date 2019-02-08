import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Posts extends Component
{
    constructor()
    {
        super();
        this.state = {
            posts: []
        };
    }
    componentDidMount()
    {
        if(this.props.userid === 0)
        {
            this.props.history.push('/');
        }
        else
        {
            axios.get(`/api/posts`).then((response) =>
            {
                console.log('posts',response.data);
                this.setState({
                    posts: response.data
                })
            })
        }
    }
    render()
    {
        const posts = this.state.posts.map((curVal,index) =>
        {
            return(
                <div key={index}>
                    {curVal.content}
                </div>
            )
        })
        return (
            <div>
                {posts}
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

export default connect(mapStateToProps)(Posts);