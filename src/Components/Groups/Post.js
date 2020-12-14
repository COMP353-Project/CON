import './css/GroupPost.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../Global/Box';
import PostReply from './PostReply.js'

const Post = ({title, user, date, description }) => {
  const [replies, setReplies] = React.useState([{ comment: "i agree", user: "John", date: "24-12-2010  12:22" }, { comment: "pineapple", user: "Bob", date: "24-12-2010  12:22" }])
  const renderDescription = () => {
    if (description.length < 250) return description;

    return description.substring(0, 250) + '...';
  };

  return (
    <div>
      <Box>
        <div className="card-info">
          <h3 className="card-title"/*style={{ fontSize: '25px', fontWeight: 500 }}*/>{title}</h3>
          <div className="card-author">{user}</div>
          <div className="card-date">{date}</div>
        </div>
        <div className="card-description">{renderDescription()}</div>
        <PostReply replies={replies} />
      </Box>
      
    </div>
  );
};

export default Post;