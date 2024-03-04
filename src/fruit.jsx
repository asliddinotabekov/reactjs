import React from 'react'
import Card from './card';
import './index.css'
import datas from './mock';


class Fruits extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        {
          datas.map((item) => <Card data={item} key={item?.id} />)
        }
      </div>
    );
  }
}
export default Fruits