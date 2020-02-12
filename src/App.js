import React, { Component } from 'react';
import Header from './components/Header.js'
import Diagram3 from './components/Diagram3'
import Diagram from './components/Diagram'
import Diagram5 from './components/Diagram5'
import './App.css';

const xlables = [];
const ylables = [];

async function getData () {
  const response =  await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  for (let a of data){
    xlables.push(a.id);
    ylables.push(a.username);
    
  }
}

class App extends Component {  
constructor(props){
super(props);
this.state={
  chartData:getData()
    }
  }
  
  UNSAFE_componentWillMount(){
    this.getChartData();
    }
  
    getChartData(){
      this.setState({
        chartData:{
          labels:  ylables,
          datasets: [{
            label: 'DAY/TEMP',
              backgroundColor: ['rgb(0, 99, 132)'],
              data: xlables
          }]
      }
      })
    }

   
render(){
  
  
  return ( 
    <div className="App">
      <Header/>
      <Diagram grafName="Chart" chartData={this.state.chartData} ></Diagram>
      <Diagram3 grafName="Chart" chartData={this.state.chartData} ></Diagram3>
      <Diagram5 grafName="Chart" chartData={this.state.chartData} grafType='radar' color="#5c4703" ></Diagram5>
    </div>
  );
}
}
export default App;
