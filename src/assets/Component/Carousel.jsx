import React from 'react'

const Carousel = () => {

  return (
    <>




<div class="container">
  <div className="div bg-green-500">
    <div class="carousel-container flex justify-center items-center">
<div class="carousel  w-1/2 h-80 bg-red-500 ">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="./carousel/duke.png" class="w-full" alt="Slide 1" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="./carousel/car.jpg" class="w-full" alt="Slide 2" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="./carousel/cucle.jpg" class="w-full" alt="Slide 3" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
      
    </div>
  </div>
</div>

    </>
  )
}

export default Carousel