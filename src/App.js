import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Table from './components/Table';
import Register from './components/Register';
import Login from './components/Login';
import { loginUser } from "./redux/actions";
import { useDispatch } from "react-redux";
import {getDataOfLoggedInUser} from './redux/manageLocalStorage'
function App() {

  // restore previously logged in user
  const dispatch = useDispatch()
  

  if (JSON.parse(localStorage.authentificatedId) !== null) {
    // console.log(`JSON.parse(localStorage.authentificatedId)`, JSON.parse(localStorage.authentificatedId) === null )
    console.log(`Number(localStorage.authentificatedId))`, Number(localStorage.authentificatedId))
    console.log(`getDataOfLoggedInUser (JSON.parse(localStorage.authentificatedId)) --------------`, getDataOfLoggedInUser (JSON.parse(localStorage.authentificatedId)) )
    dispatch(loginUser( getDataOfLoggedInUser (JSON.parse(localStorage.authentificatedId))))
  }

  // console.log('localStorage.users', localStorage.users)


   return (
    <Router>
      <div className="container-md mt-5 pt-5 pb-5 border border-primary rounded px-lg-5 bg-white">
        <Header />
        <Route path="/" exact render={() => <Table /> } />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
