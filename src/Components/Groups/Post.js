import React from 'react';
import '../../css/GroupsStyle.css'
import { Box, Button, TextareaAutosize, TextField } from '@material-ui/core';
function Post (props){
    
    const[text, setText] = React.useState(props.text)
    const[imagePath, setImgPath] = React.useState(props.imagePath)

      return (
          
          <Box>
              <p>{text}</p>
              <img src={imagePath} alt=""></img>
          </Box>
      );
  }
export default Post