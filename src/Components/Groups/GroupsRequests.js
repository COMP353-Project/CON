import React from 'react';
import GroupsNav from './GroupsNav.js'
import MyGroupNav from './MyGroupNav.js'

function GroupsRequests () {
  const users = [{username: "User 1"}, {username: "User 2"}, {username: "User 3"}, {username: "User 4"}]

  return (
    <div>
      <GroupsNav/>
      <MyGroupNav/>
      <div className="page-container">
        <h1>Groups Requests Page (hardcoded)</h1>
        <div className="friend-manage">
          {users.map(user =>{
              return (
                <div className='card'>
                  <div className="card-info">
                    <p className="friend-info">{user.username}</p>
                    <div className="friend-actions">
                      <button className="post-btn">Accept</button>
                      <button className="post-btn del">Reject</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default GroupsRequests;
