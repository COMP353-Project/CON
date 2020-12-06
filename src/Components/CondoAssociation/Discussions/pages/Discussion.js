import '../css/Discussion.css';
import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../../../Global/BackButton';
import Box from '../../../Global/Box';
import CommentCard from '../components/CommentCard';
import CondoNav from '../../CondoNav';

const comments = [
  {
    id: 0,
    author: 'Author\'s Name',
    date: 'January 12th 2020',
    comment: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book'
  },
  {
    id: 1,
    author: 'Author\'s Name',
    date: 'January 12th 2020',
    comment: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book'
  },
  {
    id: 2,
    author: 'Author\'s Name',
    date: 'January 12th 2020',
    comment: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book'
  },
  {
    id: 3,
    author: 'Author\'s Name',
    date: 'January 12th 2020',
    comment: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book'
  },
];

const Discussion = () => {
  const { id } = useParams();

  const renderComments = () => {
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
  };

  return (
    <>
      <CondoNav />
      <div className="page-container">
        <BackButton />
        <Box>
          <div className="page-header">
            <div className="card-info">
              <h3 className="card-title">Discussion Title</h3>
              <div className="card-author">Author Name</div>
              <div className="card-date">January 12th 2020</div>
            </div>
            <Link to={`/condo-association/discussions/${id}/edit`}>
              <div className="edit-button">Edit</div>
            </Link>
          </div>
          <div className="card-description">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</div>
          <div className="card-description">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</div>
          <div className="card-description">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</div>
          <h3 className="card-title">Comments</h3>
          {renderComments()}
          <div className="field comment-form">
            <textarea rows="2" cols="2" placeholder="Add Comment" />
            <div className="comment-button">Post</div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Discussion;