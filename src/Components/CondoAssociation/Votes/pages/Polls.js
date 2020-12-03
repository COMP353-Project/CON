import React from 'react';
import VoteCard from '../components/VoteCard';

const polls = [
  {
    id: 0,
    title: 'Poll Title',
    deadline: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    id: 1,
    title: 'Poll Title',
    deadline: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    id: 2,
    title: 'Poll Title',
    deadline: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    id: 3,
    title: 'Poll Title',
    deadline: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  }
];

const Polls = () => {
  const renderPolls = () => {
    return polls.map(({ id, title, deadline, description }) => {
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
      {renderPolls()}
    </div>
  );
};

export default Polls;