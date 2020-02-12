import React, { Component } from 'react'
import Chart from "chart.js";
import $ from "jquery";


const postId=1;

class Diagram4 extends Component {
    
    
    render() {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }

    const ctx_live = document.getElementById("mycanvas");
    const myChart=new Chart(ctx_live, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(0, 99, 132)',
            borderColor: 'rgb(0, 99, 132)',
            data: []
        }]
    },

    // Configuration options go here
    options: { responsive: true,
        title: {
          display: true,
          text: "Chart.js - Dynamically Update Chart Via Ajax Requests",
        },
        legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              }
            }]
          }      
    
    } 
    
} ) ;


        const getData = function() {
            $.ajax({
              url: 'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments',
              success: function(data) {
                // process your data to pull out what you plan to use to update the chart
                // e.g. new label and a new data point
                
                // add new label and data point to chart's underlying data structures
                myChart.data.labels.push("Post " + postId++);
                myChart.data.datasets[0].data.push(getRandomIntInclusive(1, 25));
                
                // re-render the chart
                myChart.update();
              }
            });
          };

        const {grafName} = this.props;
        //const {grafType} = this.props;
        return (
            <div className="col-md-12 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
    <h1>{grafName}</h1>
                    </div>
                    <div className="card-body">
        <h3><canvas id="mychart" className="col-md-8 mb-4"></canvas></h3>
                    </div>
                </div>
                
            </div>
        )
        
    }
}
export default Diagram4;