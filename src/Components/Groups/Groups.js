import { Accordion, Button, OutlinedInput, Card, Container } from '@material-ui/core';
import { render } from '@testing-library/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import Post from './Post';
import '../../css/GroupsStyle.css'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ChatBubble } from '@material-ui/icons';

const drawerWidth = 500;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
    // necessary for content to be below app bar
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
    const classes = useStyles();
    const theme = useTheme();

    const [dataSent, setDataSent] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState("Ziad");
    const [posts, setPosts] = React.useState(() => [{text: "I want this apt", imagePath:"h", date: "24-12-2010  12:22", user: currentUser}, {text: "How much is this", imagePath:"h", date: "24-11-2010  9:56", user:currentUser}]);
    const [chats, setChats] = React.useState(() => [{text: "Hey guys", date: "24-12-2010  12:22", user: currentUser}, {text: "Hola", date: "24-11-2010  9:56", user:currentUser}]);
    const [postTextInput, setPostText] = React.useState("");
    const [chatTextInput, setChatText] = React.useState("");
    const [imageInput, setImageURL] = React.useState(0);

    const [open, setOpen] = React.useState(false);
    
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
    const handleClick = () => {
        axios({
            method: 'post',
            url: 'http://localhost/con-master/api/example.php',
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

    const handlePost = (text, imagePath, user) => {
        if(postTextInput.length > 0){
            console.log("Received: " + text + imagePath)
            var newPosts = posts
            newPosts.push({text: text, imagePath: imagePath, date: getDate(), user: user})
            setPosts(newPosts)
            setPostText("")
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

    const handleChatTextChange = ({target}) => {
        setChatText(target.value)
    }

    const handleFileUpload = ({target}) => {
        try{
            setImageURL(URL.createObjectURL(target.files[0]))
        } catch (err){
            console.log("image empty")
        }
        
    }

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
    };
     return (
        <div>
            <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        <Typography variant="h6" noWrap>
            Group
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <ChatBubble />Chats
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
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
        <OutlinedInput type="text"  class="postText" value ={chatTextInput} placeholder="Write a reply..." fullWidth="true" multiline="true" rows="2" onChange={handleChatTextChange}/>
        <Button type ="submit" variant="outlined" onClick={() => handleChatPost(chatTextInput, currentUser)}>Send</Button>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
            <div class="post-container">
                {posts.map(post =>{
                    return (
                        <Post text={post.text} imagePath={post.imagePath} date={post.date} user={post.user}/>
                    );
                }
                )}
            </div>
            <div class="groupsInput">
                <label>Attach images and text here!</label> 
                <div class="post-input-wrapper">
                    <OutlinedInput type="text" placeholder="Write a post..." fullWidth="true" multiline="true" rows="5" value ={postTextInput} onChange={handlePostTextChange}/>
                    <input type="file" accept=".jpg,.png,.gif" onChange={handleFileUpload}></input>
                    <Button type ="submit" variant="outlined" onClick={() => handlePost(postTextInput, imageInput, currentUser)}>Post</Button>
                </div>
            </div>
            <Button onClick={handleClick}>Click me!</Button>
        </div>

    );
}

export default Groups;
