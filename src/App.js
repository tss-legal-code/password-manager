import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Table from './components/Table';
import Register from './components/Register';
import Login from './components/Login';
import { loginUser } from "./redux/actions";
import { useEffect } from "react";
import { checkOrInitDefaultLocalStorageContent, GET_LOGGED_ID, GET_USERDATA_OF_LOGGED_USER } from "./redux/localStorageActions";
import { useDispatch } from "react-redux";

function App() {

  // restore previously logged in user
  const dispatch = useDispatch()

  useEffect(() => {
    // localStorage.clear()
    checkOrInitDefaultLocalStorageContent()

    if (GET_LOGGED_ID() !== null && GET_LOGGED_ID() !== "logged out") {
      dispatch(
        loginUser(
          GET_USERDATA_OF_LOGGED_USER()
        )
      )
    } 

  }, [])



  return (
    <Router>
      <div className="container-md mt-5 pt-5 pb-5 border border-primary rounded px-lg-5 bg-white">
        <Header />
        <Route path="/" exact render={() => <Table />} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
