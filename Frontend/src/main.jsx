import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { SocketProvider } from "./context/SocketProvider.jsx";

import { Provider } from "react-redux";
import MentifyStore from "./store/index.js";

import LoginPage from "./pages/Login/LoginPage.jsx";
import SignupPage from "./pages/Login/SignupPage.jsx";
import MainUserPanel from "./pages/UserPanel/MainUserPanel.jsx";
import ForgetPassword from "./pages/Password/ForgetPassword.jsx";
import ResetPassword from "./pages/Password/ResetPassword.jsx";

import HomePage from "./pages/Home/HomePage.jsx";
import Dashboard from "./pages/UserPanel/Dashboard.jsx";
import History from "./pages/UserPanel/History.jsx";
import Notifications from "./pages/UserPanel/Notifications.jsx";
import Settings from "./pages/UserPanel/Settings.jsx";
import ScheduleMeeting from "./pages/UserPanel/ScheduleMeeting.jsx";
import Support from "./pages/UserPanel/Support.jsx";
import FeedBackAndRatings from "./pages/UserPanel/FeedBackAndRatings.jsx";
import Monitoring from "./pages/UserPanel/Monitoring.jsx";
import AddFarm from "./pages/UserPanel/Farm/AddFarm.jsx";
import UpdateFarm from "./pages/UserPanel/Farm/UpdateForm.jsx";
import FarmPage from "./pages/UserPanel/Farm/FarmPage.jsx";
import Ai from "./pages/UserPanel/Ai.jsx";
import CropPage from "./pages/UserPanel/Farm/CropPage.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={MentifyStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/ai" element={<Ai />} />
          {/* Routes for the main App */}
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
          </Route>

          {/* User related routes */}
          <Route path="user" element={<App />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route
              path="api/v1/password/reset/:token"
              element={<ResetPassword />}
            />

            <Route path="dashboard" element={<MainUserPanel />}>
              <Route index element={<Dashboard />} />
              <Route path="history" element={<History />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<Settings />} />
              <Route path="scheduledmeetings" element={<ScheduleMeeting />} />
              <Route path="support" element={<Support />} />
              <Route path="feedback" element={<FeedBackAndRatings />} />
              <Route path="monitoring" element={<Monitoring />} />
              <Route path="addfarm" element={<AddFarm />} />
              <Route path="updatefarm" element={<UpdateFarm />} />
              <Route path="farmpage/:farmId" element={<FarmPage />} />
              <Route path="croppage/:cropId" element={<CropPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
