import React, { Component } from 'react'
import {Chart} from 'react-chartjs-2'



class Diagram5 extends Component {
constructor(props){
    super(props);
    this.state={
        chartData:this.props.chartData
    }
    this.chartReference = React.createRef();
    }
          componentDidMount(_props) 
          {
            this.myChart = new Chart(this.chartReference.current, {
                type: this.props.chartData.type,
                data: {
                    labels: this.state.chartData.labels,
                    datasets: [{
                        label: this.props.chartData.label,
                        fill:this.props.chartData.fill,
                        data: this.state.chartData.data,
                        borderColor: this.state.chartData.backgroundColor,
                        borderWidth: 1,
                        backgroundColor:this.state.chartData.backgroundColor
                    }]
                },options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
          }
          );
          window.setInterval(() => {
            this.myChart.update({duration: 1,
                easing: 'easeOutExpo'});
            this.setState({
                chartData:this.props.chartData
            })
          }, 10) 
           this.setState({
            chartData:this.props.chartData
        })
}
    render() {
        return (
            <div className="col-md-12 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
    <h1>{this.state.chartData.label}</h1>
                    </div>
                    <div className="card-body col-md-8">
                    <canvas id='myChart' data={this.props.chartData} ref={this.chartReference} />
                    </div>
                </div>
                
            </div>
        )
        
    }
}
export default Diagram5;