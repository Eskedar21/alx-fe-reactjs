import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul>
          <li><Link to="ProfileDetails">Profile Details</Link></li>
          <li><Link to="ProfileSettings">Profile Settings</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* This renders nested routes */}
    </div>
  );
}

export default Profile;
