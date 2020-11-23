import { Accordion, Button, OutlinedInput } from '@material-ui/core';
import { render } from '@testing-library/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import Post from './Post';
import '../../css/GroupsStyle.css'

function Groups () {

    const [dataSent, setDataSent] = React.useState(false);
    const [posts, setPosts] = React.useState(() => [{text: "I want this apt", imagePath:"h", date: new Date()}, {text: "How much is this", imagePath:"h", date: new Date()}]);
    const [textInput, setText] = React.useState("");
    const [imageInput, setImageURL] = React.useState(0);
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
        if(textInput.length > 0){
            console.log("Received: " + text + imagePath)
            var newPosts = posts
            newPosts.push({text: text, imagePath: imagePath, date: new Date()})
            setPosts(newPosts)
            setText("")
        } else alert("Text field cannot be empty!")
        
    }

    const handleTextChange = ({target}) => {
        setText(target.value)
    }

    const handleFileUpload = ({target}) => {
        try{
            setImageURL(URL.createObjectURL(target.files[0]))
        } catch (err){
            console.log("image empty")
        }
        
    }

    
     return (
        <div>
            <h1>Groups page</h1>
            <div class="post-container">
                {posts.map(post =>{
                    return (
                        <Post text={post.text} imagePath={post.imagePath} date={post.date}/>
                    );
                }
                )}
            </div>
            <div class="groupsInput">
                <label>Attach images and text here!</label> 
                <div class="post-input-wrapper">
                    <OutlinedInput type="text" class="postText" placeholder="Write a post..." fullWidth="true" multiline="true" rows="5" value ={textInput} onChange={handleTextChange}/>
                    <input type="file" accept=".jpg,.png,.gif" onChange={handleFileUpload}></input>
                    <Button type ="submit" variant="outlined" onClick={() => handlePost(textInput, imageInput)}>Post</Button>
                </div>
               
                    
                
            </div>
            <Button onClick={handleClick}>Click me!</Button>
        </div>

    );
}

export default Groups;
