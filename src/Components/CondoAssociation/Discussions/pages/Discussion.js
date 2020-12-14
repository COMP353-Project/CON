import '../css/Discussion.css';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../../../Global/BackButton';
import Box from '../../../Global/Box';
import CommentCard from '../components/CommentCard';
import CondoNav from '../../CondoNav';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';

const Discussion = () => {
  const { id } = useParams();
  const { fetchDiscussion, addComment, state: { discussion: { discussion, comments } } } = useContext(CondoAssociationContext);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchDiscussion({ discussionId: id });
  }, []);

  const renderComments = () => {
    if (comments) {
      return comments.map(({ id, author, date, comment }) => {
        return (
          <Fragment key={id}>
            <CommentCard
              author={author}
              date={date}
              comment={comment}
            />
          </Fragment>
        );
      });
    } else {
      return <div>No comments</div>;
    }
  };

  return (
    <>
      <CondoNav />
      <div className="page-container">
        <BackButton />
        <Box>
          <div className="page-header">
            <div className="card-info">
              <h3 className="card-title">{discussion ? discussion.title : ''}</h3>
              <div className="card-author">{discussion ? discussion.author : ''}</div>
              <div className="card-date">{discussion ? discussion.date : ''}</div>
            </div>
            <Link to={`/condo-association/discussions/${id}/edit`}>
              <div className="edit-button">Edit</div>
            </Link>
          </div>
          <div className="card-description">{discussion ? discussion.content : ''}</div>
          <h3 className="card-title">Comments</h3>
          {renderComments()}
          <div className="field comment-form">
            <textarea value={comment} onChange={e => setComment(e.target.value)} rows="2" cols="2" placeholder="Add Comment" />
            <div
              className="comment-button"
              onClick={async () => {
                await addComment({ discussionId: id, content: comment });
                fetchDiscussion({ discussionId: id });
                setComment('');
              }}
            >
              Post
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Discussion;