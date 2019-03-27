import React, { Component } from 'react';
import { Header, StationList } from './';
import StationMap from "./StationMap";

class Root extends Component {
  constructor() {
    super();
    this.state = {
      defaultView: true
    };
  }

  changeView() {
    this.setState({
      defaultView: !this.state.defaultView
    });
  }

  render() {
    if (this.state.defaultView) {
      return(
      <div className="bg-black-05 w-100 h-100">
        <Header title='BySykler' defaultView={this.state.defaultView} changeView={this.changeView.bind(this)}/>
        <StationList />
      </div>
    )} else {
      return(
      <div className="bg-black-05 w-100 h-100">
        <Header title='BySykler' defaultView={this.state.defaultView} changeView={this.changeView.bind(this)}/>
        <StationMap />
      </div>
    )}
  };
}

export { Root };
