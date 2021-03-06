import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainBody from './components/mainbody';
import OkjiiRetailer from './components/OkjiiRetailer';
import OkjiiFast from './components/OkjiiFast';
import Fastaq from './components/Fastaq';
import OkjiiOffer from './components/OkjiiOffer';
import OkjiiBlog from './components/OkkjiBlog';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
    <div className="App">
      <ScrollToTop />
     <Navbar />
     <Switch>
     <Route path='/OkjiiRetailer' >
              <OkjiiRetailer />
     </Route>
     <Route path='/OkjiiFast' >
              <OkjiiFast />
     </Route>
      
     <Route path='/Fastaq' >
              <Fastaq />
     </Route>
     <Route exact path='/'>
     <MainBody />
     
     </Route>
     <Route path='/OkjiiOffer' >
      <OkjiiOffer />
      </Route>
      <Route path='/OkjiiBlog' >
      <OkjiiBlog />
      </Route>

     </Switch>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
