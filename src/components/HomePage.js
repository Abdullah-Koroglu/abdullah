import React, { Component } from 'react'
import Header from './Header'
import Diagram5 from './Diagram5'

 class HomePage extends Component {
    render() {
        return (
            <div>
               <Header/><div class="container">
</div>
<div class="container">
  <div class="row">
    <div class="col">    <Diagram5 chartData={this.props.chartData}></Diagram5>
</div>
    <div class="col">    <Diagram5 chartData={this.props.chartData}></Diagram5>
</div>
    <div class="col">    <Diagram5 chartData={this.props.chartData}></Diagram5>
</div>
    <div class="col">    <Diagram5 chartData={this.props.chartData}></Diagram5>
</div>
  </div>
</div>
                
            </div>
        )
    }
}
export default HomePage;