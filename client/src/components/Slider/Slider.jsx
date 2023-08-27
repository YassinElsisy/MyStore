import React, { useState }  from 'react'
import "./Slider.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Slider = () => {

const [currentSlider, setCurrentSlider] = useState(0);

const sliderData = [
    "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/flagged/photo-1553802922-5609062365b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://plus.unsplash.com/premium_photo-1661281366900-88b41445a004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
];

const previousSlide = () => {
    setCurrentSlider(currentSlider === 0 ? 3 : (previous) => previous - 1)
}
const nextSlide = () => {
    setCurrentSlider(currentSlider === 3 ? 0 : (previous) => previous + 1)
}

  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlider*100}vw)`}}>
            <img src={sliderData[0]} alt="" srcset="" />
            <img src={sliderData[1]} alt="" srcset="" />
            <img src={sliderData[2]} alt="" srcset="" />
            <img src={sliderData[3]} alt="" srcset="" />
        </div>
        <div className="navigation-icons">
            <div className="icon" onClick={previousSlide}>
                <NavigateBeforeIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <NavigateNextIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider