import '../css/Ads.css';
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AdCard from '../components/AdCard';
import PostAdButton from '../components/PostAdButton';
import CondoNav from '../../CondoNav';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';

const Ads = () => {
  const { fetchAds } = useContext(CondoAssociationContext);
  const [ads, setAds] = React.useState([]);

  /**
   * Function that fetches ads
   */
  const getAds = async () => {
    setAds(await fetchAds());
  };

  React.useEffect(() => {
    getAds();
  }, []);

  const RenderAds = () => {
    if (ads) {
      return ads.map(({ condo_assoc_post_id, title, description, price, contact_number, first_name, last_name, created_at }) => {
        return (
          <Fragment key={condo_assoc_post_id}>
            <AdCard
              condo_assoc_post_id={condo_assoc_post_id}
              title={title}
              price={price}
              first_name={first_name + ' ' + last_name}
              created_at={created_at}
              description={description}
            />
          </Fragment>
        );
      });
    }
    else {
      <div>No ads to show!</div>
    }
  }



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
        <RenderAds />
      </div>
    </>
  );
};

export default Ads;