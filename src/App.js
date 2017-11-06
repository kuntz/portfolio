import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/Pages/homePage';
import Contact from './Components/Pages/contactPage';

//Include
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">


        <Route exact path='/' component = {Homepage} />
        <Route exact path='/contact' component = {Contact} />

      </div>
      </Router>
    );
  }
}

export default App;
