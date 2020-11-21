import { Box, Button, TextareaAutosize, TextField } from '@material-ui/core';
import { render } from '@testing-library/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import Post from './Post';
import '../../css/GroupsStyle.css'

function Groups () {

    const [dataSent, setDataSent] = React.useState(false);
    const [posts, setPosts] = React.useState(() => [{text: "I want this apt", imagePath:"h", time: new Date()}, {text: "How much is this", imagePath:"h", time: new Date()}]);
    const [textInput, setText] = React.useState("");
    //useEffect(() => console.log("posts changed"), [posts])
    //const posts = []
    const data = {
        id: 3,
        name: 'example',
        email: 'example@example.com',
        feedback: 'hey! this is my feedback'
    }
    const handleClick = () => {
        axios({
            method: 'post',
            url: 'http://localhost/con/api/example.php',
            headers: {
                'content-type': 'application/json',
            },
            data: data
        })
            .then(result => {
                console.log(result.data)
                setDataSent(result.data.sent)
                console.log(dataSent)
                console.log('hey im here!')
            })
            .catch(error => setDataSent({
                error: error.message
            }));
    }

    const handlePost = (text, imagePath) => {
        console.log("Received: " + text + imagePath)
        var newPosts = posts
        newPosts.push({text: text, imagePath: imagePath, time: new Date()})
        setPosts(newPosts)
        setText("")
       // posts.push({text: text, imagePath: imagePath});
        console.log(posts.length)
        if (posts.length != 0)
            console.log(posts[posts.length - 1])
    }

    const handleTextChange = ({target}) => {
        setText(target.value)
    }

    
     return (
        <div>
            <h1>Groups page</h1>
            <div class="post-container">
                {posts.map(post =>{
                    return (
                    <div class="groupPost">
                        <Post text={post.text} imagePath={post.imagePath}/>
                        <span class="date">{(post.time).toString()}</span>
                    </div>
                    );
                }
                )}
            </div>
            <div class="groupsInput">
                <label>Attach images and text here!</label> 
                <Box>
                    <TextField type="text" value ={textInput} onChange={handleTextChange}/>
                    <input type="file"></input>
                </Box>
                
                <div>
                    <Button type ="submit" onClick={() => handlePost(textInput, "img")}>Post</Button>
                </div>
                
            </div>
            <Button onClick={handleClick}>Click me!</Button>
        </div>

    );
}

export default Groups;
