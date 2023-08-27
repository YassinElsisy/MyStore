import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Kids</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>Neweset Arrivals</span>
          <span className='sale'>Clearance</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Store Locator</span>
          <span>Contact Us</span>
          <span>Socials</span>
        </div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
  )
}

export default Footer