import React, { Component } from 'react';

class StationCard extends Component {
  render() {
    const { title, subtitle, availability } = this.props.station;
    return (
      <div style={{width: 300}} className='bg-white dib br3 mr2 pa3 shadow-5 ma2'>
        <div className='f4 fw6 black-90'>{ title }</div>
        <div className='f6 pv1 black-50'>{ subtitle }</div>
        <div className='f6 flex justify-between pt2'>
          <div className='flex'><div className=''>LOCKS</div>
          <div className='ph2 fw6'>{ availability.locks }</div></div>
          <div className='flex'><div className='pl2'>BIKES</div>
          <div className='pl2 fw6'>{ availability.bikes }</div></div>
        </div>
      </div>
    )
  }
}

export { StationCard };
