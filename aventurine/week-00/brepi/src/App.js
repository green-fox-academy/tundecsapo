import React, { Component } from 'react';
import './App.css';
import Heading from './Components/Heading';
import Tiles from './Components/Tiles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      idLength: 25,  
      beerIds: 25,  
      beers: [],
      company: {
        name: "Brewdog's beer", 
        owner: 'Tunde Csapo'
      }  
    }  
  }  

  componentDidMount() {
    this.getBeer();
  }

  componentWillUnmount() {

  }

  getBeer = () => {
    let beerIdList = [];
    for (let i = this.state.beerIds - this.state.idLength + 1; i < this.state.beerIds + 1; i++) {
      beerIdList.push(i);  
    }  
    let beerString = beerIdList.join('|');
    let url = `https://api.punkapi.com/v2/beers?ids=${beerString}`;
    fetch(url)
    .then( (response) => response = response.json())
    .then( (response) => {
      this.setState({
        beers: response,
      });
    });   
  }

  render() {
    return (
      <div className="app">  
        <Heading company={this.state.company} getBeer={this.getBeer} list={this.state.beers}/>
        <Tiles beers={this.state.beers}/>
      </div>
    );
  }
}

export default App;
