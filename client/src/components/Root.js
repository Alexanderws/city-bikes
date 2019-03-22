import React, { Component } from 'react';
import { Header, StationList } from './';

class Root extends Component {
  render() {
    return(
    <div className="bg-black-05 w-100 h-100">
      <Header title='BySykler' />
      <StationList identifier={this.props.identifier} />
    </div>
    )
  };
}

export { Root };
