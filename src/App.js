import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Table from './components/Table';
import Register from './components/Register';
import Login from './components/Login';

function App() {

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
