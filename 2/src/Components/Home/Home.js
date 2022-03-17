import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { auth } from "../../redux/store";

export const Home = () => {
  const userData = useSelector((state) => {
    return state.signUpForm.userDetails;
  });
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(auth.logout());
  };
  return (
    <>
      <header className="header">
        <div className="container mainWrapper2">
          <div className="userDetailsWrapper">
            <span className="userImg">
              <img src={userData.userAvatar} alt="user_image" />
            </span>
            <span className="userDetails">
              {`Hello ${userData.userName}, you are registered with the ${userData.userEmail} 
              and ${userData.userPhone}.`}
            </span>
          </div>
          <div className="logoutBtnWrapper">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>
    </>
  );
};
