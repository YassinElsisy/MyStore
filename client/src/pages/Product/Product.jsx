import React, { useState } from 'react'
import "./Product.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = () => {
  const [selectedImage,setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/1642769397.280757-S2887500_C366_Alt1.jpg",
    "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/S2887500_C366_Alt4.jpg",
    "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/S2887500_C366_Alt3.jpg",
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={productImages[0]} alt="" onClick={e=>setSelectedImage(0)} />
          <img src={productImages[1]} alt="" onClick={e=>setSelectedImage(1)} />
          <img src={productImages[2]} alt="" onClick={e=>setSelectedImage(2)} />
        </div>
        <div className="mainImage">
          <img src={productImages[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$20</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt cum iusto voluptatibus dicta</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev)=>(prev === 1 ? 1 : prev-1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="addToCart"><AddShoppingCartIcon /> ADD TO CART</button>
        <div className="favourite">
            <span className='icon'><FavoriteBorderIcon /></span> 
            <span>ADD TO WISHLIST</span>
        </div>
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>
  )
}

export default Product