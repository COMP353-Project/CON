import React, { Fragment } from 'react';
import AdminPostCard from './AdminPostCard';
import { Context as CondoAssociationContext } from '../../context/CondoAssociationContext';
import { Context as AdminContext } from '../../context/AdminContext';
import AdCard from '../CondoAssociation/Ads/components/AdCard';

function PublicHomePage (props) {
    const { fetchAds } = React.useContext(CondoAssociationContext);
    const { fetchAdminPosts } = React.useContext(AdminContext);
    const [adminPosts, setadminPosts] = React.useState([]);
    const [ads, setAds] = React.useState([]);
    
    const getAdminPosts = async () => {
      setadminPosts(await fetchAdminPosts());
    };

    const getAds = async () => {
      setAds(await fetchAds());
    };

    React.useEffect(() => {
      getAdminPosts();
      getAds();
    }, []);

    const RenderAdminPosts = () => {
      if (adminPosts) {
        return adminPosts.map(({ id, content, title }) => {
          return (
            <Fragment key={id}>
              <AdminPostCard
                title={title}
                content={content}
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
          <div className="page-header hp">
            <h1>Welcome stranger!</h1>
          </div>
          <h1 className="hp-section-title">Admin Announcements</h1>
          <div className="hp-admin-posts">
            <RenderAdminPosts />
          </div>
          <h1 className="hp-section-title">Recent Ads</h1>
          <RenderAds />
        </div>
      </div>
    );
}

export default PublicHomePage;