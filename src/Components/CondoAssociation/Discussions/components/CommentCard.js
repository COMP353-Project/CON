import '../css/CommentCard.css';
import React from 'react';

const CommentCard = ({ author, date, comment }) => {
  return (
    <div>
      <div className="info-header">
        <div className="author">{author}</div>
        <div className="horizontal-separator" />
        <div className="date">{date}</div>
      </div>
      <div>{comment}</div>
    </div>
  );
};

export default CommentCard;