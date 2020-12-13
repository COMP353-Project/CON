import { Accordion, Button, OutlinedInput, Card, Container, Checkbox } from '@material-ui/core';
import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import Post from './Post';
import '../../css/GroupsStyle.css'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ChatBubble } from '@material-ui/icons';
import GroupsNav from './GroupsNav.js'
import MyGroupNav from './MyGroupNav.js'
import {Context as GroupsContext} from '../../context/GroupsContext.js'

const drawerWidth = 500;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'right',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Groups () {
    const { createPost, fetchPosts} = React.useContext(GroupsContext);
    const classes = useStyles();
    const theme = useTheme();

    const [groupID, setGroupID] = React.useState(1)
    const [currentUser, setCurrentUser] = React.useState("Ziad");
    const [posts, setPosts] = React.useState([]);
    const [chats, setChats] = React.useState(() => [{text: "Hey guys", date: "24-12-2010  12:22", user: currentUser}, {text: "Hola", date: "24-11-2010  9:56", user:currentUser}]);
    const [postTextInput, setPostText] = React.useState("");
    const [chatTextInput, setChatText] = React.useState("");
    const [imageInput, setImageURL] = React.useState(0);
    const [viewOnly, setViewOnly] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [postTitleInput, setPostTitle] = React.useState("");

    const getPosts = async() => {
      console.log(groupID)
      setPosts(await fetchPosts(groupID));
    }

    const sendPosts = async(user_id, group_id, title, description) => {
      await( createPost(user_id, group_id, title, description))
    }

    React.useEffect(() => {
      getPosts();
      sendPosts();
    }, []);
    
    //useEffect(() => console.log("posts changed"), [posts])
    //const posts = []
    const data = {
        name: 'example',
        email: 'example@example.com',
        feedback: 'hey! this is my feedback'
    }
    const getDate = () => {
        var date = new Date()
        var month, day, year, hours, minutes
        month = date.getMonth()
        day = date.getDay()
        year = date.getFullYear()
        hours = date.getHours()
        minutes = date.getMinutes()
        if (minutes.length >= 1){
            minutes = "0" + minutes;
        }

        return (day + "-" + month + "-" + year + "  " + hours + ":" + minutes)
    }

    const handlePost = (text, title, user) => {
        if(postTextInput.length > 0){
            console.log("Received: " + text)
            var newPosts = posts
            newPosts.push({title: "title", description: text, date: getDate(), user: user})
            setPosts(newPosts)
            sendPosts(localStorage.getItem("userid"), groupID, title, text)
            setPostText("")
            setPostTitle("")
        } else alert("Text field cannot be empty!")

    }

    const handleChatPost = (text, user) => {
        if(chatTextInput.length > 0){
            console.log("Received: " + text)
            var newChats = chats
            newChats.push({text: text, date: getDate(), user: user})
            setChats(newChats)
            setChatText("")
        } else alert("Chat field cannot be empty!")
        
    }

    const handlePostTextChange = ({target}) => {
        setPostText(target.value)
    }

    const handlePostTitleChange = ({target}) => {
      setPostTitle(target.value)
  }

    const handleChatTextChange = ({target}) => {
        setChatText(target.value)

    }

    const handleFileUpload = ({ target }) => {
        try {
            setImageURL(URL.createObjectURL(target.files[0]))
        } catch (err) {
            console.log("image empty")
        }

    }

    const handleShareCheckbox = () => {
      if(viewOnly)
        setViewOnly(false)
      else setViewOnly(true)
    }


    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
    
    };
     return (

        <div>
          <GroupsNav/>
          <MyGroupNav/>
            <div className={classes.root}>
          <h1>Group Page</h1>
          <div className="chat-wrapper">
            <IconButton edge="end" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.hide)}>
              <ChatBubble />Chats
            </IconButton>
          </div>
          <Drawer className={classes.drawer} variant="persistent" anchor="right" open={open} classes={{paper: classes.drawerPaper}}>
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <Typography variant="h6" noWrap>
              Chat
            </Typography>
            <Divider />
            {chats.map(chat =>{
                    return (
                        <div>
                            <Card  variant="outlined">
                                <ListItem>
                                    <ListItemText inset="true" secondary={"Posted by: " + chat.user + " at " + chat.date} primary={chat.text}/>    
                                </ListItem>
                            </Card>
                        </div>
                    );
                }
            )}
            <OutlinedInput type="text"  className="postText" value ={chatTextInput} placeholder="Write a reply..." fullWidth="true" multiline="true" rows="2" onChange={handleChatTextChange}/>
            <Button type ="submit" variant="outlined" onClick={() => handleChatPost(chatTextInput, currentUser)}>Send</Button>
          </Drawer>
        </div>
        <div className="post-container">
          {posts.map(post => {
             return (
               <Post description={post.description} title={post.title} user={post.first_name + " " + post.last_name} date = {post.created_at}/>
              );
            }
          )}
        </div>
        <div className="groupsInput">
          <label>Attach images and text here!</label>
          <div className="post-input-wrapper">
              <OutlinedInput type="text" placeholder="Write a title..." fullWidth="true" multiline="true" rows="1" value ={postTitleInput} onChange={handlePostTitleChange}/>
             <OutlinedInput type="text" placeholder="Write a post..." fullWidth="true" multiline="true" rows="5" value ={postTextInput} onChange={handlePostTextChange}/>
              <Button type ="submit" variant="outlined" onClick={() => handlePost(postTextInput, postTitleInput, currentUser)}>Post</Button>
              <input type="file" accept=".jpg,.png,.gif" onChange={handleFileUpload}></input>
              <label>View only</label><Checkbox checked={viewOnly} onChange={handleShareCheckbox}></Checkbox>
           </div>
        </div>
     </div>

    );
}

export default Groups;
