import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
       <div className="image">
        {item.bestSeller && <span>Best Seller</span>}
        <img src={item.img} alt="" className='mainImg' />
        <img src={item.imgHover} alt="" className='hoverImg' />
        </div> 
        <h2>{item.title}</h2>
        <div className="price">
            <h3>${item.price}</h3>
        </div>
    </div>
  </Link>
  )
}

export default Card