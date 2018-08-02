import React, { Component } from 'react';
import Tile from './Tile';

class Tiles extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      beers: this.props.getBeer  
    }
  }  */
  render() {
    let beers = this.props.beers; 
    console.log(beers)
    //console.log(beers);
    return (
      <div className="tileCont">
        {beers.map(beer => <Tile beer={beer}/>)}
      </div>
    );
  }  
}

export default Tiles;
