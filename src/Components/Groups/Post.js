import React from 'react';
import '../../css/GroupsStyle.css'
import { Box, Button, TextareaAutosize, TextField } from '@material-ui/core';
function Post (props){
    
    const[text, setText] = React.useState(props.text)
    const[imagePath, setImgPath] = React.useState(props.imagePath)
    const[date, setDate]=React.useState(props.date)

      return (
          
          <div class="groupPost">
                <div>{text}</div>
                <img class="postedImage" src={imagePath} alt=""/>
                <span class="date">{date.toString()}</span>
          </div>
      );
  }
export default Post