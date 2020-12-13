import React, { Fragment } from 'react';
import { Context as CondoAssociationContext } from '../../context/CondoAssociationContext';
import AdCard from '../CondoAssociation/Ads/components/AdCard';
import MeetingCard from '../CondoAssociation/Meetings/components/MeetingCard';

function PrivateHomePage (props) {
    const { fetchAllAds, fetchAdminMeetings, fetchGeneralMeetings } = React.useContext(CondoAssociationContext);
    const [ads, setAds] = React.useState([]);
    const [generalMeetings, setGeneralMeetings] = React.useState([]);
    const [adminMeetings, setAdminMeetings] = React.useState([]);
    
    const getAllAds = async () => {
      setAds(await fetchAllAds(localStorage.getItem('userid')));
    };

    const getGeneralMeetings = async () => {
      setGeneralMeetings(await fetchGeneralMeetings());
    };

    const getAdminMeetings = async () => {
      setAdminMeetings(await fetchAdminMeetings());
    };



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

    const RenderGeneralMeetings = () => {
      if (generalMeetings) {
        return generalMeetings.map(({ id, title, created_at, description, agenda, resolution }) => {
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
        return adminMeetings.map(({ id, title, created_at, description, agenda, minutes }) => {
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
            <h1>Welcome!</h1>
          </div>
          <h1 className="hp-section-title">Recent Ads</h1>
          <RenderAds />
          <h1 className="hp-section-title">Recent Meetings</h1>
          <RenderGeneralMeetings />
          <RenderAdminMeetings />
          <h1 className="hp-section-title">Recent Group posts</h1>
          {/* <RenderGroupPosts /> */}
        </div>
      </div>
    );
}

export default PrivateHomePage;