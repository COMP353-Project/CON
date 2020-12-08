import Nav from '../../CondoNav';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import MeetingCard from '../components/MeetingCard';
import PostMeetingButton from '../components/PostMeetingButton'
import '../css/MeetingStyles.css';

const meetings = [
  {
    id: 0,
    admin: false,
    title: 'General Meeting 1',
    date: 'January 10th 2020',
    duration: '1:30',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    id: 1,
    admin: false,
    title: 'General Meeting 2',
    date: 'January 11th 2020',
    duration: '2:30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    admin: true,
    title: 'Admin Meeting 1',
    date: 'January 10th 2020',
    duration: '1:30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    admin: true,
    title: 'Admin Meeting 2',
    date: 'January 11th 2020',
    duration: '2:30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    admin: true,
    title: 'Admin Meeting 3',
    date: 'January 12th 2020',
    duration: '3:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
];

function CondoMeetings () {
  const [adminSelected, setAdminSelected] = useState(true);

  const selectAdmin = () => {
    setAdminSelected(true);
  }
  const selectGeneral = () => {
    setAdminSelected(false)
  }

  const renderMeetings = () => {
    return meetings.map(({ id, admin, title, date, duration, description }) => {
      return (
        <Fragment key={id}>
          <MeetingCard
            id={id}
            admin={admin}
            title={title}
            date={date}
            duration={duration}
            description={description}
          />
        </Fragment>
      );
    });
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
        {renderMeetings()}
      </div>
    </div>
  );
}

export default CondoMeetings;