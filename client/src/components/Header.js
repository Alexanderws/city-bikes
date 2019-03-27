import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { title, defaultView, changeView } = this.props;

    let btnName = defaultView? "MAP" : "LIST";

    return (
      <div className="z-999 bg-white h3 f3 fw6 fixed black-90 shadow-5 top-0 left-0 right-0 tc pa3">{ title }
        <div
        className="hover-bg-black-10 bg-black-05 br3 h2 w3 mb1 f5 fixed top-1 right-2 pointer flex items-center justify-center"
        onClick={changeView}
        >
        {btnName}
        </div>
      </div>
    )
  }
}

export { Header };
