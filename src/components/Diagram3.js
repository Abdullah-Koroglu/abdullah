import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
//import Chart from "chart.js";

class Diagram3 extends Component {
constructor(props){
super(props);
this.state={
    chartData:props.chartData
}

    }
    
        
    render() {

        const {grafName} = this.props;
       
        return (
            <div className="col-md-12 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
    <h1>{grafName}</h1>
                    </div>
                    <div className="card-body col-md-8">
        <Line  id="chart"
        data={this.props.chartData}
        ></Line>
                    </div>
                </div>
                
            </div>
        )
        
    }
}
export default Diagram3;