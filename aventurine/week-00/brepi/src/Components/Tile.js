import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.beer.image_url,
      name: props.beer.name, 
      description: props.beer.description,
      status: 'image', 
      content: <img className="beerImg" src={props.beer.image_url} alt={props.beer.name} />
    }
  } 

  getPicDesc = () => {
    this.state.status === 'image' ? this.setState({content : <p>{this.state.description}</p>, status: 'description'}) : this.setState({content : <img className="beerImg" src={this.state.image} alt={this.state.name} />, status: 'image'});
  }
  
  render() {   
    console.log(this.state);  
    return (
      <div className="tile" onClick={this.getPicDesc}>
        <div className="picDesc">{this.state.content}</div>
        <div className="beerName">{this.state.name}</div>
      </div>
    );
  }  
}

export default Tile;