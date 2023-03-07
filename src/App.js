import { Link, Switch, Route } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import LoginForm from './components/Login';
import {PrivateRoute} from "./components/PrivateRoute";


function App() {
  return (
    <div className="text-center">
      <h1 className='text-red-600'>Client Auth Projesi: Friends</h1>
      <nav className="my-4 flex justify-around">
        <Link to="/login">
          LOGIN
        </Link>
        <Link to="/FriendsList">
          FRIENDSLIST
        </Link>
        <Link to="/login">
          ADDFRIEND
        </Link>
        <Link to="/login">
          LOGOUT
        </Link>
      </nav>
      <div>
        <Switch>
          <Route path="/login">
            <LoginForm/>
          </Route>
          
            <PrivateRoute path="/FriendsList" component={FriendsList}/>
          
          
        </Switch>
      </div>
      
      
    </div>
  );
}

export default App;
