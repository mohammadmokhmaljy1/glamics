import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Swiper styles

import ReviewCard from "./../../../../components/ReviewCard/ReviewCard"
export default function SwiperContainer() {
  return ( <Swiper
        className="ul-reviews-slider"
        modules={[Autoplay]}
        slidesPerView={1} // Default number of slides
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={15} // Default space between slides
        breakpoints={{
          768: {
            slidesPerView: 2, // 2 slides on medium screens
          },
          992: {
            slidesPerView: 3, // 3 slides on large screens
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4, // 4 slides on extra-large screens
            spaceBetween: 20,
          },
          1680: {
            slidesPerView: 4,
            spaceBetween: 26,
          },
          1700: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {/* Swiper Slides */}
        {[1, 2, 3, 4, 5, 6].map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard />
          </SwiperSlide>
        ))}
      </Swiper>
  )
}
