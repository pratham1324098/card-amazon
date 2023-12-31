import React,{useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase'
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Footer from './Footer';
import Prime from './Prime'

const promise = loadStripe('pk_test_51MuYGQSIhYvGKKmve28souMsp2TrRqdVNm8GF67pbSNHsZLlCqb3mxPd9o9xyGSpsJRaJcDu4BOTz2gPwpBncdyq00rq8t3bKJ');
function App() {
  const [{}, dispatch]=useStateValue();
  useEffect(() => {
    // will run only once when the app component loads....
    auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser);
        if(authUser){
          // the user just logged in/ the user was logged in
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
        }
        else{
          // the user is logged out
            dispatch({
              type:'SET_USER',
              user:null
            })
        }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/Prime">
            <Header/>
            <Prime/>
            <Footer/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
            <Footer/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route  path="/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
