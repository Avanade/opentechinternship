import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }
  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .them(res => res.text())
    .them(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }



render(){
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
      <p>{this.state.apiResponse}</p>
    </div>
  );
}

}




export default App;
