import './ImageSlider.css'
  // swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import necessary modules
import 'swiper/swiper-bundle.css'; // Swiper styles
  // image
import Image1 from './../../../assets/img/product-details-1.jpg'; // Import image
export default function ImageSlider() {
  
  return (
    <div className="col">
      <div className="ul-product-details-img">
        {/* Swiper Container */}
        <Swiper
          className="ul-product-details-img-slider"
          modules={[Navigation, Autoplay]} // Enable navigation and autoplay
          slidesPerView={1} // Show 1 slide at a time
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 3000, // Autoplay delay in milliseconds
            disableOnInteraction: false, // Allow autoplay to continue after user interaction
          }}
          spaceBetween={0} // No space between slides
          navigation={{
            nextEl: "#ul-product-details-img-slider-nav .next", // Next button selector
            prevEl: "#ul-product-details-img-slider-nav .prev", // Previous button selector
          }}
        >
          {/* Single Image Slide */}
          <SwiperSlide>
            <img src={Image1} alt="Product Image" />
          </SwiperSlide>

          {/* Single Image Slide */}
          <SwiperSlide>
            <img src={Image1} alt="Product Image" />
          </SwiperSlide>
        </Swiper>

        {/* Slider Navigation Buttons */}
        <div className="ul-product-details-img-slider-nav" id="ul-product-details-img-slider-nav">
          <button className="prev">
            <i className="flaticon-left-arrow" />
          </button>
          <button className="next">
            <i className="flaticon-arrow-point-to-right" />
          </button>
        </div>
      </div>
    </div>
  );
}