import '../css/Ads.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AdCard from '../components/AdCard';
import PostAdButton from '../components/PostAdButton';

const ads = [
  {
    id: 0,
    title: 'Ad Title',
    price: 199.99,
    author: 'Author Name',
    date: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    id: 1,
    title: 'Ad Title',
    price: 199.99,
    author: 'Author Name',
    date: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    id: 2,
    title: 'Ad Title',
    price: 199.99,
    author: 'Author Name',
    date: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    id: 3,
    title: 'Ad Title',
    price: 199.99,
    author: 'Author Name',
    date: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  }
];

const Ads = () => {
  const renderAds = () => {
    return ads.map(({ id, title, price, author, date, description }) => {
      return (
        <Fragment key={id}>
          <div style={{ height: '15px' }} />
          <AdCard
            id={id}
            title={title}
            price={price}
            author={author}
            date={date}
            description={description}
          />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <div className="title-box">
        <div className="title-txt">Ads</div>
        <Link to="/condo-association/ads/new">
          <PostAdButton />
        </Link>
      </div>
      {renderAds()}
    </div>
  );
};

export default Ads;