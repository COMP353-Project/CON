import '../../../../css/GlobalStyles.css';
import React from 'react';

const CommentCard = ({ author, date, comment }) => {
  return (
    <div className="card-comment">
      <div className="card-info">
        <div className="card-author">{author}</div>
        <div className="card-date">{date}</div>
      </div>
      <div className="card-description">{comment}</div>
    </div>
  );
};

export default CommentCard;