import React, { Component } from 'react';

class StationCard extends Component {
  render() {
    const { name, address, num_docks_available, num_bikes_available } = this.props.station;
    return (
      <div style={{width: 300}} className='bg-white dib br3 mr2 pa3 shadow-5 ma2'>
        <div className='f4 fw6 black-90'>{ name }</div>
        <div className='f6 pv1 black-50'>{ address }</div>
        <div className='f6 flex justify-between pt2'>
          <div className='flex'><div className=''>LOCKS</div>
          <div className='ph2 fw6'>{ num_docks_available }</div></div>
          <div className='flex'><div className='pl2'>BIKES</div>
          <div className='pl2 fw6'>{ num_bikes_available }</div></div>
        </div>
      </div>
    )
  }
}

export { StationCard };
