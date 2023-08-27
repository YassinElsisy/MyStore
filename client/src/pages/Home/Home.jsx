import React from 'react'
import Slider from "../../components/Slider/Slider"
import BestSellers from "../../components/BestSellers/BestSellers"
import "./Home.css"
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <BestSellers type="bestselling" />
      <Categories />
      <BestSellers type="trending" />
    </div>
  )
}

export default Home