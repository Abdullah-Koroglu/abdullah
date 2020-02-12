import React, { Component } from 'react'
import {Chart} from 'react-chartjs-2'
//import Chart from "chart.js";


class Diagram5 extends Component {
constructor(props){
    super(props);
    console.log('constructor')
    this.state={
        chartData:props.chartData
    }
    this.chartReference = React.createRef();
    }

        
          componentDidMount(props) 
          {
            console.log('cdm')
           this.setState({
            chartData:this.props.chartData
        })
          window.setInterval(() => {
            this.myChart.update();
            //console.log('cdm')
          }, 5000) 
        
       }

       componentDidUpdate(Props, prevState) {
           
        const {color} = this.props;
        console.log('cdu')
        console.log(this.props.chartData);
        this.myChart = new Chart(this.chartReference.current, {
                type: this.props.grafType,
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: this.props.grafName,
                        data: [6, 5, 4, 3, 2, 1],
                        borderColor: color,
                        borderWidth: 1
                    }]
                },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}
          );
       }
    render() {
        console.log('naber');
        const {grafName} = this.props;
        return (
            <div className="col-md-12 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
    <h1>{grafName}</h1>
                    </div>
                    <div className="card-body col-md-8">
                    <canvas ref={this.chartReference} data={this.state.chartData}  />
                    </div>
                </div>
                
            </div>
        )
        
    }
}
export default Diagram5;