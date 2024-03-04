import React, { Component } from 'react'
import './fruitStyle.css'

class Card extends Component {
  render() {
    console.log(this.props.data);
    const { data } = this.props
    return (
      <div className='container' >
        <img className='img' src={data?.img} alt="" />
        <h3 className="title">{data?.name}</h3>
      </div>
    );
  }
}



export default Card;