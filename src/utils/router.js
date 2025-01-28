import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Body from "../components/Body";
import Feed from "../components/Feed";

function RoutesList() {
  return (
    // wrapping the entire app and provide it a store 
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            {/* below are the children routes of parent route Body */}
            <Route path="/" element={<Feed/>} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default RoutesList;
