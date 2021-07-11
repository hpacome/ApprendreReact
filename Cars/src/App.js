import React, { Component} from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre: "Mon catalogue voitures"
  }

  changeTitle = (e) => {
    this.setState({
      titre: 'Mon nouveau titre'
    });
  }

  changeViaParam = (titre) => {
    this.setState({
      titre: titre
    });
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param
    });
  }

  changeViaInput = (e) => {
    this.setState({
      titre : e.target.value
    });
  }

  render(){
    return (
      <div className="App">
        <Mycars titre={this.state.titre}/>

        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaParam('Titre via un param')}>Via param</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre via Bind')}>Via bind</button>
      
        <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>

      </div>
    );
  }
}

export default App;
