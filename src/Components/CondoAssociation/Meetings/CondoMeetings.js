import Nav from '../CondoNav.js';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import './CondoStyles.css';
import '../../../css/GlobalStyles.css'

function CondoMeetings() {
  const [adminSelected, setAdminSelected] = useState(true);

  const selectAdmin = () => {
    setAdminSelected(true);
  }
  const selectGeneral = () => {
    setAdminSelected(false)
  }

  const discussions = [
    {
      id: 0,
      title: 'General Meeting 1',
      date: 'January 10th 2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 1,
      title: 'General Meeting 2',
      date: 'January 11th 2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      title: 'Admin Meeting 1',
      date: 'January 10th 2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 3,
      title: 'Admin Meeting 2',
      date: 'January 11th 2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 4,
      title: 'Admin Meeting 3',
      date: 'January 12th 2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  ];

  return (
    <div>
      <Nav />
      <div className="subnav">
        <Button color="inherit" onClick={selectAdmin} className={adminSelected ? 'selected': 'hidden'}>Admin Meetings</Button>
        <Button color="inherit" onClick={selectGeneral} className={adminSelected ? 'hidden' : 'selected'}>General Meetings</Button>
      </div>
      <div className={adminSelected ? 'container--condo admin': 'container--condo general'}>
        <div className="card general">
          <h3>General Meeting 1</h3>
          <p>Date: January 10th, 2020</p>
          <p>Duration: 1:30</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="card general">
          <h3>General Meeting 2</h3>
          <p>Date: January 11th, 2020</p>
          <p>Duration: 2:00</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className="card admin">
          <h3>Admin Meeting 1</h3>
          <p>Date: January 10th, 2020</p>
          <p>Duration: 1:30</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="card admin">
          <h3>Admin Meeting 2</h3>
          <p>Date: January 11th, 2020</p>
          <p>Duration: 2:00</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="card admin">
          <h3>Admin Meeting 3</h3>
          <p>Date: January 12th, 2020</p>
          <p>Duration: 3:00</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  );
}

export default CondoMeetings;