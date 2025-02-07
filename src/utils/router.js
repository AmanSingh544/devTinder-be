import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Body from "../components/Body";
import Feed from "../components/Feed";
import ToastNotification from "../components/Toast";
import Signup from "../components/Signup";
import Requests from "../components/Requests";
import Friends from "../components/Friends";

function RoutesList() {
  return (
    // wrapping the entire app and provide it a store 
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          {/* below are the children routes of parent route Body */}
          <Route path="signup" element={<Signup />} />

          <Route path="feed" element={<Feed />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="requests" element={<Requests/>} />
          <Route path="friends" element={<Friends />} />
        </Route>
      </Routes>
      <ToastNotification />
    </BrowserRouter>
  );
}

export default RoutesList;
