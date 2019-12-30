import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Useritems from './components/users/Useritems';

class App extends Component {  
  render() {
    return (      
      <div className="App">
        <Navbar 
          // title="GitHub Finder", 
          // icon="fab fa-github",
        />
        <Useritems />
      </div>
    );
  }
}

export default App;
