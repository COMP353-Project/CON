import Nav from '../../CondoNav';
import { useContext, useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import MeetingCard from '../components/MeetingCard';
import PostMeetingButton from '../components/PostMeetingButton'
import '../css/MeetingStyles.css';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';

function CondoMeetings () {
  const [adminSelected, setAdminSelected] = useState(true);
  const { fetchGeneralMeetings, fetchAdminMeetings } = useContext(CondoAssociationContext);
  const [generalMeetings, setGeneralMeetings] = useState([]);
  const [adminMeetings, setAdminMeetings] = useState([]);


  /**
   * Function that fetches general meetings
   */
  const getGeneralMeetings = async () => {
    setGeneralMeetings(await fetchGeneralMeetings());
    // setAdminSelected(false);
  };

  const getAdminMeetings = async () => {
    setAdminMeetings(await fetchAdminMeetings());
    // setAdminSelected(true);
  };

  useEffect(() => {
    getGeneralMeetings();
    getAdminMeetings();
  }, []);


  const selectAdmin = () => {
    setAdminSelected(true);
  }
  const selectGeneral = () => {
    setAdminSelected(false)
  }

  // const renderMeetings = () => {
  //   return meetings.map(({ id, admin, title, date, duration, description }) => {
  //     return (
  //       <Fragment key={id}>
  //         <MeetingCard
  //           id={id}
  //           admin={admin}
  //           title={title}
  //           date={date}
  //           // duration={duration}
  //           description={description}
  //         />
  //       </Fragment>
  //     );
  //   });
  // };


  const RenderGeneralMeetings = () => {
    if (generalMeetings) {
      return generalMeetings.map(({ id, title, created_at, description, agenda, resolution }) => {
        return (
          <Fragment key={id}>
            <MeetingCard
              id={id}
              title={title}
              created_at={created_at}
              // duration={duration}
              description={description}
              agenda={agenda}
              resolution={resolution}
            />
          </Fragment>
        );
      });
    }
    else {
      <div>No meetings to show!</div>
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
              // duration={duration}
              description={description}
              agenda={agenda}
              minutes={minutes}
            />
          </Fragment>
        );
      });
    }
    else {
      <div>No meetings to show!</div>
    }
  };

  return (
    <div>
      <Nav />

      <div className={adminSelected ? 'page-container admin' : 'page-container general'}>
        <div className="page-header">
          <h1>Meetings</h1>
          <Link to="/condo-association/meetings/new">
            <PostMeetingButton />
          </Link>
        </div>
        <div className="subnav">
          <Button color="inherit" onClick={selectAdmin} className={adminSelected ? 'selected' : 'hidden'}>Admin Meetings</Button>
          <Button color="inherit" onClick={selectGeneral} className={adminSelected ? 'hidden' : 'selected'}>General Meetings</Button>
        </div>
        {!adminSelected && <RenderGeneralMeetings />}
        {adminSelected && <RenderAdminMeetings />}
      </div>
    </div>
  );
}

export default CondoMeetings;