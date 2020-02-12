import React, { Component } from 'react'
//import {line,bar,pie} from 'react-chartjs-2'
import Chart from "chart.js";

class Diagram extends Component {
    
    chartRef = React.createRef();

    componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");
    new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [70, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {} 
    
} ) ;}
        
    
    render() {

        const {grafName} = this.props;
        //const {grafType} = this.props;
       
        return (
            <div className="col-md-12 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
    <h1>{grafName}</h1>
                    </div>
                    <div className="card-body">
        <h3><canvas id="chart" ref={this.chartRef}className="col-md-8 mb-4"></canvas></h3>
                    </div>
                </div>
                
            </div>
        )
        
    }
}
export default Diagram;