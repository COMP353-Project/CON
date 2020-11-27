import React, { Component } from 'react';
import '../../css/GroupsStyle.css'
import { Accordion, AccordionSummary, AccordionDetails, Divider, Container, Card, List, ListItem, ListItemText, Button, OutlinedInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#E5E5E5',
  },
  reply: {
    backgroundColor: 'white',
  },
  list: {
    width: '100%',
  }
}));

function Post (props){
    const classes = useStyles();
    const[text, setText] = React.useState(props.text)
    const[imagePath, setImgPath] = React.useState(props.imagePath)
    const[date, setDate]=React.useState(props.date)
    const[user, setUser]=React.useState(props.user)
    const[replies, setReplies] = React.useState([{comment: "i agree", user: "John", date: "24-12-2010  12:22"}, {comment: "pineapple", user: "Bob", date: "24-12-2010  12:22"}])
    const[textInput, setTextInput] = React.useState("")
    
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

    const handleReply = (text, userName) => {
      if(textInput.length > 0){
        console.log("Received: " + text + userName )
        var newReplies = replies
        newReplies.push({comment: text, user: userName, date: getDate()})
        console.log(newReplies)
        setReplies(newReplies)
        setTextInput("")
      } else alert("Reply field cannot be empty!")
    }

    const handleTextChange = ({target}) => {
        setTextInput(target.value)
    }

      return (
          <div class="group-post">
            <Container  fixed>
              <Card  variant="outlined">
                <img class="postedImage" src={imagePath} alt=""/>
                <ListItem>
                  <ListItemText inset="false" secondary={"Posted by: " + user + " at " + date} primary={text}/>    
                </ListItem>
              </Card>
            </Container>
            <Container fixed>
              <Accordion className ={classes.root} class="replies-accordion">
                <AccordionSummary>
                  <ListItem>View Replies: ({replies.length})</ListItem>
                </AccordionSummary>
                <Divider variant="inset" component="div" />
                <AccordionDetails  className ={classes.list}>
                  <div>
                  <List>
                  {replies.map(reply =>{
                    return (
                      <li>
                      <ListItem>
                        <ListItemText inset="false" secondary={"Posted by: " + reply.user + " at " + reply.date} primary={reply.comment}/>
                      </ListItem>
                      <Divider variant="inset" component="div" />
                      </li>
                      );
                    }
                  )}</List>
                  <div class="reply-input-wrapper">
                    <OutlinedInput type="text" className ={classes.reply} class="postText" value ={textInput} placeholder="Write a reply..." fullWidth="true" multiline="true" rows="2" onChange={handleTextChange} />
                    <Button type ="submit" variant="outlined" onClick={() => handleReply(textInput, user)}>Reply</Button>
                  </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </Container>
          </div>
      );
  }
export default Post