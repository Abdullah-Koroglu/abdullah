import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'

const xlables = [];
const ylables = [];

async function pushData(){
  xlables.push(1);
  ylables.push('2');
}

async function getData () {
  const response =  await fetch("duz.json");
  const data = await response.json();
  console.log(data);
/*while (xlables.length) {
      xlables.pop();
    }
    while (ylables.length) {
      ylables.pop();
    }*/
  for (let a of data){ 
    xlables.push(a.id);
    ylables.push(a.name);
  }
  //console.log('getData');
}

class App extends Component {  
constructor(props){
  window.setInterval(() => {
    
 // pushData();
console.log(ylables);
}, 1000)
super(props);
this.state={
  chartData:getData()
    }
  }
  
  UNSAFE_componentWillMount(){
    this.getChartData();
    
    }
    componentDidUpdate(){
      
    }
  
    getChartData(){
      this.setState({
        chartData:{
          type:'line',
          labels:  ylables,
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
        ],
          borderColor:'rgb(39, 29, 132)',
          data: xlables,
          label: 'DAY/TEMP'
          
    }
      })
    }

render(){
  
  
  return ( 
    <div className="App">
      <HomePage chartData={this.state.chartData}/>
    </div>
  );
}
}
export default App;
