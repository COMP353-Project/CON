import '../css/Ad.css';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../../../Global/BackButton';
import Box from '../../../Global/Box';
import CondoNav from '../../CondoNav';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';

const Ad = () => {
  const { condo_assoc_post_id } = useParams();
  const { fetchAd } = useContext(CondoAssociationContext);
  const [ad, setAd] = React.useState([]);

  /**
   * Function that fetches a specific ad given an id
   */
  const getAd = async () => {
    setAd(await fetchAd({ condo_assoc_post_id }));
  };

  React.useEffect(() => {
    getAd();
  }, []);


  return (
    <>
      <CondoNav />
      <div className="page-container">
        <BackButton />
        <Box>
          <div className="header-container">
            <div className="card-info">
              <h3 className="card-title">{ad.title}</h3>
              <div className="card-author">{ad.first_name + ' ' + ad.last_name}</div>
              <div className="card-price">{ad.price}$</div>
              <div className="card-date">{ad.created_at}</div>
            </div>
            <Link to={`/condo-association/ads/${condo_assoc_post_id}/edit`}>
              <div className="edit">Edit</div>
            </Link>
          </div>
          <div className="card-description">
            {ad.description}
          </div>
          <div className="contact">
            {ad.contact_number}
          </div>
        </Box>
      </div>
    </>
  );
};

export default Ad;