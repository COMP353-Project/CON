import React, { Component } from 'react';
import '../../css/GroupsStyle.css'
import { Accordion, AccordionSummary, AccordionDetails, Divider, Container, Card, List, ListItem, ListItemText, Button, OutlinedInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostReply from './PostReply.js'

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

function Post (props) {
  const viewOnly = props.viewOnly;
  const [text, setText] = React.useState(props.text)
  const [imagePath, setImgPath] = React.useState(props.imagePath)
  const [date, setDate] = React.useState(props.date)
  const [user, setUser] = React.useState(props.user)
  const [replies, setReplies] = React.useState([{ comment: "i agree", user: "John", date: "24-12-2010  12:22" }, { comment: "pineapple", user: "Bob", date: "24-12-2010  12:22" }])

  return (
    <div class="group-post">
      <Container fixed>
        <Card variant="outlined">
          <img class="postedImage" src={imagePath} alt="" />
          <ListItem>
            <ListItemText inset="false" secondary={"Posted by: " + user + " at " + date} primary={text} />
          </ListItem>
        </Card>
      </Container>
      {!viewOnly ? <PostReply replies={replies} /> : <Container fixed>
        <Card variant="outlined">
          <ListItem>
            <ListItemText inset="false" secondary="View Only" />
          </ListItem>
        </Card>
      </Container>}
    </div>
  );
}
export default Post