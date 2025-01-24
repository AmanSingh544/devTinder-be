import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Body from "./Body";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          {/* below are the children routes of parent route Body */}
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
