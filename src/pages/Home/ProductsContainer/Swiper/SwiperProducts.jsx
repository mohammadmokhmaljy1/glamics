  // swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Swiper styles

  // components
import ProductCard from './../../../../components/ProductCard/ProductCard';

export default function SwiperProducts() {
  return (
    <Swiper
      className="ul-products-slider-2"
      modules={[Navigation, Autoplay]}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={15}
      navigation={{
        nextEl: ".ul-products-slider-2-nav .next",
        prevEl: ".ul-products-slider-2-nav .prev",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1, 
        },
        480: {
          slidesPerView: 2, 
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          spaceBetween: 20, 
        },
        1400: {
          spaceBetween: 22,
        },
        1600: {
          spaceBetween: 26,
        },
        1700: {
          spaceBetween: 30,
        },
      }}
    >
      {/* Swiper Slides */}
      {[1, 2, 3, 4, 5, 6].map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCard />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

