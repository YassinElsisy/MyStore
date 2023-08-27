import React from 'react'
import "./BestSellers.css"
import Card from "../Card/Card"

const BestSellers = ({type}) => {
    const data = [
        {
            id: 1,
            img: "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/S2852553_C128_Alt4.jpg",
            imgHover: "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/S2852553_C128_Alt3.jpg",
            title: "Animal Print Mesh Dress",
            bestSeller: true,
            price: 50,
        },{
            id: 2,
            img: "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/S2887500_C366_Alt4.jpg",
            imgHover: "https://eadn-wc05-4348344.nxedge.io/cdn/wp-content/uploads/1642769397.280757-S2887500_C366_Alt1.jpg",
            title: "White & Blue T-Shirt",
            bestSeller: true,
            price: 10,
        },{
            id: 3,
            img: "",
            imgHover: "",
            title: "",
            bestSeller: true,
            price: 20,
        },{
            id: 4,
            img: "",
            imgHover: "",
            title: "",
            bestSeller: true,
            price: 20,
        },
    ]

  return (
    <div className='bestSellers'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dolores odit quibusdam at blanditiis hic nostrum modi ullam suscipit excepturi.</p>
        </div>
        <div className="bottom">
            {data.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}

export default BestSellers