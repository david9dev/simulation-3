import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Form extends Component
{
    constructor()
    {
        super();
        this.state = {
            title: "",
            img: "",
            content: ""
        };
    }
    handleInputChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handlePost()
    {
        const post = {...this.state, userid: this.props.userid}
        console.log(post);
        axios.post('/api/posts', post).then((response) =>
        {
            console.log(response);
        }).catch((error) =>
        {
            console.log(error);
        })
        
    }
    render()
    {
        return (
            <div>
                Form component
                <input name='title' placeholder='title'
                onChange={(event) => this.handleInputChange(event)}
                />
                <input name='img' placeholder='img url'
                onChange={(event) => this.handleInputChange(event)}
                />
                <input name='content' placeholder='content'
                onChange={(event) => this.handleInputChange(event)}
                />
                <button
                onClick={() => this.handlePost()}
                >post</button>
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

export default connect(mapStateToProps)(Form);