import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const Main = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>

      {/* <Routes>
        <Route path="/">
          <Navigate to="/signup" />
        </Route>
        <Route path="/signup">
          {!loginStatus ? <SignUp /> : <Navigate to="/home" />}
        </Route>
        <Route path="/home">
          {loginStatus ? <Home /> : <Navigate to="/signup" />}
        </Route>
      </Routes> */}
    </>
  );
};
export default Main;
