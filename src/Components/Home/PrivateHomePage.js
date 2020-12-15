import React, { Fragment } from 'react';
import AdminPostCard from './AdminPostCard';
import { Context as CondoAssociationContext } from '../../context/CondoAssociationContext';
import { Context as AdminContext } from '../../context/AdminContext';
import AdCard from '../CondoAssociation/Ads/components/AdCard';
import MeetingCard from '../CondoAssociation/Meetings/components/MeetingCard';

function PrivateHomePage (props) {
    const { fetchAllAds, fetchAdminMeetings, fetchGeneralMeetings } = React.useContext(CondoAssociationContext);
    const { fetchAdminPosts } = React.useContext(AdminContext);
    const [adminPosts, setadminPosts] = React.useState([]);
    const [ads, setAds] = React.useState([]);
    const [generalMeetings, setGeneralMeetings] = React.useState([]);
    const [adminMeetings, setAdminMeetings] = React.useState([]);
    
    const getAdminPosts = async () => {
      setadminPosts(await fetchAdminPosts());
    };

    const getAllAds = async () => {
      setAds(await fetchAllAds(localStorage.getItem('userid')));
    };

    const getGeneralMeetings = async () => {
      setGeneralMeetings(await fetchGeneralMeetings());
    };

    const getAdminMeetings = async () => {
      setAdminMeetings(await fetchAdminMeetings());
    };

    const RenderAdminPosts = () => {
      if (adminPosts) {
        return adminPosts.slice(0, 4).map(({ id, content, title }) => {
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
        return ads.slice(0, 5).map(({ condo_assoc_post_id, title, description, price, contact_number, first_name, last_name, created_at }) => {
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

    const RenderGeneralMeetings = () => {
      if (generalMeetings) {
        return generalMeetings.slice(0, 2).map(({ id, title, created_at, description, agenda, resolution }) => {
          return (
            <Fragment key={id}>
              <MeetingCard
                id={id}
                title={title}
                created_at={created_at}
                description={description}
                agenda={agenda}
                resolution={resolution}
              />
            </Fragment>
          );
        });
      }
      else {
        return(
        <div>No meetings to show!</div>
        );
      }
    };

    const RenderAdminMeetings = () => {
      if (adminMeetings) {
        return adminMeetings.slice(0, 2).map(({ id, title, created_at, description, agenda, minutes }) => {
          return (
            <Fragment key={id}>
              <MeetingCard
                id={id}
                title={title}
                created_at={created_at}
                description={description}
                agenda={agenda}
                minutes={minutes}
              />
            </Fragment>
          );
        });
      }
      else {
        return(
          <div></div>
        );
      }
    };

    React.useEffect(() => {
      getAdminPosts();
      getAllAds();
      getGeneralMeetings();
      if(localStorage.getItem('admin') === '1'){
        getAdminMeetings();
      }
    }, []);

    return (
      <div>
        <div className="page-container">
          <div className="page-header hp">
            <h1>Welcome CON member!</h1>
          </div>
          <h1 className="hp-section-title">Admin Announcements</h1>
          <div className="hp-admin-posts">
            <RenderAdminPosts />
          </div>
          <h1 className="hp-section-title">Recent Ads</h1>
          <RenderAds />
          <h1 className="hp-section-title">Recent Meetings</h1>
          <div className="hp-meetings">
            <RenderGeneralMeetings />
            <RenderAdminMeetings />
          </div>
          {/* <h1 className="hp-section-title">Recent Group posts</h1> */}
          {/* <RenderGroupPosts /> */}
        </div>
      </div>
    );
}

export default PrivateHomePage;