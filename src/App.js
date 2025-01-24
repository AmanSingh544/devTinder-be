// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "../components/Login";
// import Profile from "../components/Profile";
// import Body from "../components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import RoutesList from "./utils/router";

function App() {
  return (
    // wrapping the entire app and provide it a store 
    <Provider store={appStore}>
      <RoutesList />
    </Provider>

  );
}

export default App;
