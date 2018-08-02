import React, { Component } from 'react';

class Paginator extends Component {
  render() {
    return (
//      <div className="paginator">
        <button onClick={this.props.getBeer}>{this.props.pageNum}</button>
//      </div>
    ); 
  }  
}

export default Paginator;
