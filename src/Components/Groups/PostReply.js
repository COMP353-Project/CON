import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Divider, Container, Card, List, ListItem, ListItemText, Button, OutlinedInput } from '@material-ui/core';

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


function PostReply (props) {
  const classes = useStyles();
  const [textInput, setTextInput] = React.useState("")
  const [replies, setReplies] = React.useState(props.replies)

  const handleReply = (text, userName) => {
    if (textInput.length > 0) {
      var newReplies = replies
      newReplies.push({ comment: text, user: userName, date: getDate() })
      setReplies(newReplies)
      setTextInput("")
    } else alert("Reply field cannot be empty!")
  }

  const getDate = () => {
    var date = new Date()
    var month, day, year, hours, minutes
    month = date.getMonth()
    day = date.getDay()
    year = date.getFullYear()
    hours = date.getHours()
    minutes = date.getMinutes()
    if (minutes.length >= 1) {
      minutes = "0" + minutes;
    }

    return (day + "-" + month + "-" + year + "  " + hours + ":" + minutes)
  }

  const handleTextChange = ({ target }) => {
    setTextInput(target.value)
  }
  return (
    <Container fixed>
      <Accordion className={classes.root} className="replies-accordion">
        <AccordionSummary>
          <ListItem>View Replies: ({props.replies.length})</ListItem>
        </AccordionSummary>
        <Divider variant="inset" component="div" />
        <AccordionDetails className={classes.list}>
          <div>
            <List>
              {props.replies.map(reply => {
                return (
                  <li>
                    <ListItem>
                      <ListItemText inset="false" secondary={"Posted by: " + reply.user + " at " + reply.date} primary={reply.comment} />
                    </ListItem>
                    <Divider variant="inset" component="div" />
                  </li>
                );
              }
              )}</List>
            <div className="reply-input-wrapper">
              <OutlinedInput type="text" className={classes.reply} className="postText" value={textInput} placeholder="Write a reply..." fullWidth="true" multiline="true" rows="2" onChange={handleTextChange} />
              <Button type="submit" className="post-btn" variant="outlined" onClick={() => handleReply(textInput, props.user)}>Reply</Button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
export default PostReply