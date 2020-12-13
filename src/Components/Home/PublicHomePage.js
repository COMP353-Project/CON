import React, { Fragment } from 'react';
import { Context as CondoAssociationContext } from '../../context/CondoAssociationContext';
import AdCard from '../CondoAssociation/Ads/components/AdCard';

function PublicHomePage (props) {
    const { fetchAds } = React.useContext(CondoAssociationContext);
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
        return (
          <div></div>
        );
      }
    }

    return (
      <div>
        <div className="page-container">
          <div className="page-header">
            <h1>Condo Renting Association</h1>
          </div>
          <RenderAds />
        </div>
      </div>
    );
}

export default PublicHomePage;