import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NewTokens from "./pages/New/Tokens/Index";

import NewProfile from "./pages/New/Settings/Profile";
import NewPassword from "./pages/New/Settings/ChangePassword";

import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Index from "./pages/Landing Page/Index";
import SideBar from "./components/Account/SideBar";


import Dashboard from "./pages/Account/DashBoard";
import Usage from "./pages/Account/Usage";
import PricePlans from "./pages/Account/PricePlans";
import OnDemand from "./pages/Account/OnDemand";
import { default as DocDesign } from "./pages/Documentation/Documentation";
import PrivacyPolicy from "./pages/Account/PrivacyPolicy";
import TermsOfUse from "./pages/Account/TermsOfUse";
import Notification from "./pages/Account/Notification";
import About from "./pages/About";
// import GpsData from "./pages/GpsPhone/GpsData";
import OneTimeSms from "./pages/Account/OneTimeSms";
function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* <Route path="/gpsdata" element = {<GpsData/>} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/documentation" element={<DocDesign />} />
        <Route path="/account" element={<SideBar />}>
          <Route index element={<Dashboard />} />
          <Route path="usage" element={<Usage />} />
          <Route path="tokens" element={<NewTokens />} />
          <Route path="plans" element={<PricePlans />} />
          <Route path="profile" element={<NewProfile />} />
          <Route path="password" element={<NewPassword />} />
          <Route path="ondemand" element={<OnDemand />} />
          <Route path="notification" element={<Notification />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="termsofuse" element={<TermsOfUse />} />
          <Route path="onetimesms" element={<OneTimeSms/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
