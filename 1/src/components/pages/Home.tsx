import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/index";
import "./Home.css";

const Home = () => {
  const userData = useSelector((state) => {
    return state.authActions.userDetails;
  });
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <>
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
    </>
  );
};

export default Home;
