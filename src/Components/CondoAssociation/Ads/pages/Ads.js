import '../css/Ads.css';
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AdCard from '../components/AdCard';
import PostAdButton from '../components/PostAdButton';
import CondoNav from '../../CondoNav';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';
// const ads = [
//   {
//     id: 0,
//     title: 'Ad Title',
//     price: 199.99,
//     author: 'Author Name',
//     date: 'January 12th 2020',
//     description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
//   },
//   {
//     id: 1,
//     title: 'Ad Title',
//     price: 199.99,
//     author: 'Author Name',
//     date: 'January 12th 2020',
//     description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
//   },
//   {
//     id: 2,
//     title: 'Ad Title',
//     price: 199.99,
//     author: 'Author Name',
//     date: 'January 12th 2020',
//     description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
//   },
//   {
//     id: 3,
//     title: 'Ad Title',
//     price: 199.99,
//     author: 'Author Name',
//     date: 'January 12th 2020',
//     description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
//   }
// ];


const Ads = () => {
  const { fetchAds } = useContext(CondoAssociationContext);
  const [ads, setAds] = React.useState([]);

  /**
   * Function that fetches ads
   */
  const getAds = async () => {
    setAds(await fetchAds());
    console.log(ads);
  };

  React.useEffect(() => {
    getAds();
  }, []);

  const renderAds = () => {
    // return ads.map(({ condo_assoc_post_id, title, description, price, contact_number, first_name, last_name, created_at }) => {
    return ads.map(({ condo_assoc_post_id, title, description, price, contact_number, first_name, last_name, created_at }) => {
      // console.log(ads);
      return (
        <Fragment key={condo_assoc_post_id}>
          <AdCard
            id={condo_assoc_post_id}
            title={title}
            price={price}
            first_name={first_name + ' ' + last_name}
            created_at={created_at}
            description={description}
          />
        </Fragment>
      );
    });
  };

  return (
    <>
      <CondoNav />
      <div className="page-container">
        <div className="page-header">
          <h1>Ads</h1>
          <Link to="/condo-association/ads/new">
            <PostAdButton />
          </Link>
        </div>
        {renderAds()}
      </div>
    </>
  );
};

export default Ads;