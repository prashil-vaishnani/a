import "./App.css";
import { Home } from "./Components/Home/Home";
import { Signup } from "./Components/Signup/Signup";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const loginStatus = useSelector((state) => {
    return state.signUpForm.isLoggedIn;
  });

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/signup" />
        </Route>
        <Route path="/signup">
          {!loginStatus ? <Signup /> : <Redirect to="/home" />}
        </Route>
        <Route path="/home">
          {loginStatus ? <Home /> : <Redirect to="/signup" />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
