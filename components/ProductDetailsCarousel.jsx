import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = ({images}) => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
      <Carousel
        infiniteLoop={true}
        showIndicators={true}
        showStatus={false}
        thumbWidth={60}
        autoPlay={true}
        className='productCarousel'>

          {images?.map((img) => (
            <img 
              key={img.id}
              src={img.attributes.url}
              alt={img.attributes.name}
              />
          ))}

            {/* <img src="/pur1.webp"/>
            <img src="/pur2.webp"/>
            <img src="/pur3.webp"/>
            <img src="/pur4.webp"/>
            <img src="/pur5.webp"/>
            <img src="/pur6.webp"/>
            <img src="/pur7.webp"/> */}
        </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel
