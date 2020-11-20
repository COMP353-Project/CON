import React from 'react';
import '../../css/GroupsStyle.css'
function Post (props){
    
    const[text, setText] = React.useState(props.text)
    const[imagePath, setImgPath] = React.useState(props.imagePath)

      return (
          
          <div class="groupPost">
              <p>{text}</p>
              <img src={imagePath} alt=""></img>
          </div>
      );
  }
export default Post