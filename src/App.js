import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/Notfound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact"  component={Contact}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route exact path="/users/:id" component={User}/>
          <Route component={NotFound}/>
        </Switch>
        {/* nav bar ke ander jo components hain usme redirect properties dalne ke liye
        BrowserRouter,Route,switch import krate hain, aur jaisa ki hmne browser route ko as Router
        liya hai toh humko pura code <Router> ke ander ikhna prega*/}


      </div>
    </Router>
  );
}

export default App;
