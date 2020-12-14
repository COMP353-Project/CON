import '../css/Discussions.css';
import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DiscussionCard from '../components/DiscussionCard';
import PostDiscussionButton from '../components/PostDiscussionButton';
import CondoNav from '../../CondoNav';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';

const Discussions = () => {
  const { fetchDiscussions, state: { discussions } } = useContext(CondoAssociationContext);

  useEffect(() => {
    fetchDiscussions();
  }, []);

  const renderDiscussions = () => {
    if (discussions.length) {
      return discussions.map(({ id, title, author, date, description }) => {
        return (
          <Fragment key={id}>
            <DiscussionCard
              id={id}
              title={title}
              author={author}
              date={date}
              description={description}
            />
          </Fragment>
        );
      });
    } else {
      return <div>No discussions</div>;
    }
  };

  return (
    <>
      <CondoNav />
      <div style={{ padding: '30px' }}>
        <div className="page-header">
          <h1>Discussions</h1>
          <Link to="/condo-association/discussions/new">
            <PostDiscussionButton />
          </Link>
        </div>
        {renderDiscussions()}
      </div>
    </>
  );
};

export default Discussions;