import React from 'react';
import VoteCard from '../components/VoteCard';

const elections = [
  {
    id: 0,
    title: 'Election Title',
    deadline: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    id: 1,
    title: 'Election Title',
    deadline: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  }
];

const Elections = () => {
  const renderElections = () => {
    return elections.map(({ id, poll, title, deadline, description }) => {
      return (
        <VoteCard
          key={id}
          id={id}
          title={title}
          deadline={deadline}
          description={description}
        />
      );
    });
  };

  return (
    <div>
      {renderElections()}
    </div>
  );
};

export default Elections;