import React, { Component } from 'react';
import Header from './components/Header.js'
import Diagram4 from './components/Diagram4'
import './App.css';


class App extends Component {  
constructor(props){
super(props);
this.state={
  chartData:{}
    }
  }
  

render(){
    
  return (
    <div className="App">
      <Header/>
      <Diagram4 grafName="test"  ></Diagram4>
      
    </div>
  );
}
}
export default App;
