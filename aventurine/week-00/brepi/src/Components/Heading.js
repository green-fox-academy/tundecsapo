import React, { Component } from 'react';
import Paginator from './Paginator';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      name: this.props.company.name  
    }
  }  
  render() {
    const listLength = Math.ceil(this.state.list.length / 6); 
    const list = [];
    for (let i = 1; i < listLength + 1; i++ ) {
      list.push(i);
    }
    return (
      <div className="heading">
        <h1>{this.state.name}</h1>
        <button onClick={this.props.getBeer}>Get List!</button>
        {list.map(elem => <Paginator key={elem} getBeer={this.props.getBeer} pageNum={elem} />)}
      </div>
    );
  }  
}

export default Heading;