import React from 'react';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul>
          <li><Link to="ProfileDetail">Profile Details</Link></li>
          <li><Link to="ProfileSettings">Profile Settings</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* Default route that displays a message */}
        <Route index element={<h3>Please select an option.</h3>} />
        {/* Nested routes for Profile Details and Settings */}
        <Route path="ProfileDetail" element={<ProfileDetails />} />
        <Route path="ProfileSettings" element={<ProfileSettings />} />
      </Routes>

      {/* The Outlet renders the child route components */}
      <Outlet />
    </div>
  );
}

export default Profile;
