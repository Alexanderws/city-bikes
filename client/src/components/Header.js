import React, { Component } from 'react';

class Header extends Component {

  render() {
    const { title } = this.props;

    return (
      <div className="bg-white h3 f3 fw6 black-90 fixed shadow-5 top-0 left-0 right-0 tc pa3">{ title }</div>
    )
  }
}

export { Header };
