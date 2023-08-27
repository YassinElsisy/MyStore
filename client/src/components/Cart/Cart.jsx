import React from 'react';
import "./Cart.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/S2852553_C128_Alt4.jpg",
      imgHover: "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/S2852553_C128_Alt3.jpg",
      title: "Animal Print Mesh Dress",
      bestSeller: true,
      price: 50,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel natus dolore quidem explicabo suscipit a quia labore atque architecto praesentium."
  },{
      id: 2,
      img: "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/S2887500_C366_Alt4.jpg",
      imgHover: "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/1642769397.280757-S2887500_C366_Alt1.jpg",
      title: "White & Blue T-Shirt",
      bestSeller: true,
      price: 10,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel natus dolore quidem explicabo suscipit a quia labore atque architecto praesentium."
  }
  ]
  return (
    <div className='cart'>
        <h1>Your Shopping Cart</h1>
        {data?.map(item =>(
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete" />
          </div>
        ))}
        <div className="total">
          <span>SUBTOTAL</span>
          <span>$123</span>
        </div>
        <button className='checkout'>CHECKOUT</button>
        <button className="clear">CLEAR CART</button>
    </div>
  )
}

export default Cart