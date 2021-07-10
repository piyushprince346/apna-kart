import './App.css';
import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import Login from './components/Login/Login';
import { auth } from './database/firebase';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from 'react'
import { useStateValue } from './contexts/StateProvider';
import Checkout from './components/Checkout/Checkout';
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
