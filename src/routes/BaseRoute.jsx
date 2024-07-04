import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landing/Landing';
import ClientSignUp from '../pages/signup/ClientSignUp';
import RiderRegistration from '../pages/rider/RiderRegistration';

const BaseRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<ClientSignUp />} />
      <Route path="/rider/registration" element={<RiderRegistration />} />
      <Route path="/*" element={<LandingPage />} />
    </Routes>
  );
};

export default BaseRoute;
