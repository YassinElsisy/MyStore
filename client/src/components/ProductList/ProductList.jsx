import "./ProductList.css"
import React from "react"
import Card from "../Card/Card"

const ProductList = () => {
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
    <div className='product-list'>
        {data?.map(item=>(
            <Card item={item} key={item.id} />)
            )}
    </div>
  )
}

export default ProductList