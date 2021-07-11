import React, { Component} from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    
  }

  render(){
    return (
      <div className="App">
        <Mycars/>
      </div>
    );
  }
}

export default App;
