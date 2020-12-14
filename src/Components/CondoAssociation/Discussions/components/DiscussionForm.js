import '../css/DiscussionForm.css';
import React, { useContext, useState, useEffect } from 'react';
import PostDiscussionButton from './PostDiscussionButton';
import BackButton from '../../../Global/BackButton';
import { useParams } from 'react-router-dom';
import CondoNav from '../../CondoNav';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';
import { useHistory } from 'react-router-dom';

const DiscussionForm = ({ isEdit }) => {
  const history = useHistory();
  const { id } = useParams();

  const { createDiscussion, updateDiscussion, deleteDiscussion, fetchDiscussions, state: { discussion: { discussion } } } = useContext(CondoAssociationContext);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  useEffect(() => {
    if (isEdit) {
      setTitle(discussion.title);
      setContent(discussion.content);
      setIsPublic(discussion.isPublic === '1');
    }
  }, []);

  return (
    <>
      <CondoNav />
      <div className="page-container">
        <div>
          <BackButton />
        </div>
        <div className="page-header">
          <h1>{isEdit ? 'Edit Discussion' : 'Post Discussion'}</h1>
          {isEdit
            ? <div className="buttons-container">
              <div
                className="delete-button"
                onClick={async () => {
                  await deleteDiscussion({ discussionId: id });
                  history.go(-2);
                }}
              >
                Delete Discussion
              </div>
              <PostDiscussionButton
                title="Edit Discussion"
                onClick={async () => {
                  await updateDiscussion({ discussionId: id, title, isPublic, content });
                  history.goBack();
                }}
              />
            </div>
            : <PostDiscussionButton
              onClick={async () => {
                await createDiscussion({ title, content, isPublic });
                history.goBack();
              }}
            />}
        </div>
        <form className="ui form">
          <div className="field">
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text"
              placeholder="Discussion Title"
            />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input
                checked={isPublic}
                onChange={e => setIsPublic(!isPublic)}
                type="checkbox"
                tabIndex="0"
              />
              <label>Make Discussion Public</label>
            </div>
          </div>
          <div className="field">
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              rows="10"
              cols="2"
              placeholder="Discussion Content"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default DiscussionForm;