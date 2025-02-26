import './HeroSlider.css'
import  { useState } from 'react';

  // swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 

  //images
import smImage1 from './../../../assets/img/banner-img-slide-1.jpg'
import bigImage1 from './../../../assets/img/banner-slide-1.jpg'

export default function HeroSlider(){
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="overflow-hidden" style={{display:'flex', justifyContent:"center"}}>
      <div className="ul-container">
        <section className="ul-banner">
          <div className="ul-banner-slider-wrapper">
            <Swiper
              className="ul-banner-slider"
              modules={[Navigation, Thumbs, Autoplay]} 
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".ul-banner-slider-nav .next",
                prevEl: ".ul-banner-slider-nav .prev",
              }}
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={20}
            >
              {[1, 2, 3, 4].map((slide, index) => (
                <SwiperSlide key={index} className="ul-banner-slide">
                  <div className="ul-banner-slide-img">
                    <img src={bigImage1} alt="Banner Image" />
                  </div>
                  <div className="ul-banner-slide-txt">
                    <span className="ul-banner-slide-sub-title">Perfect for Summer Evenings</span>
                    <h1 className="ul-banner-slide-title">Casual and Stylish for All Seasons</h1>
                    <p className="ul-banner-slide-price">Starting From <span className="price">$129</span></p>
                    <a href="shop.html" className="ul-btn">SHOP NOW <i className="flaticon-up-right-arrow"></i></a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="ul-banner-slider-nav-wrapper">
              <div className="ul-banner-slider-nav">
                <button className="prev"><span className="icon"><i className="flaticon-down"></i></span></button>
                <button className="next"><span className="icon"><i className="flaticon-down"></i></span></button>
              </div>
            </div>
          </div>

          <div className="ul-banner-img-slider-wrapper">
            <Swiper
              className="ul-banner-img-slider"
              modules={[Autoplay]}
              onSwiper={setThumbsSwiper}
              slidesPerView={1} 
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20} 
              breakpoints={{
                992: {
                  spaceBetween: 15,
                },
                1680: {
                  spaceBetween: 26,
                },
                1700: {
                  spaceBetween: 30,
                },
              }}
            >
              {[1, 2, 3, 4].map((slide, index) => (
                <SwiperSlide key={index}>
                  <img src={smImage1} alt="Banner Image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

