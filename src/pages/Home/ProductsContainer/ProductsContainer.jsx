  // components
import UlProductsSubBanner from './UlProductsSubBanner';
import UlSectionHeading from './UlSectionHeading';
import SwiperProducts from "./Swiper/SwiperProducts"
import SliderActions from "./Swiper/SliderActions"

export default function ProductsContainer() {
  return (
    <section className="ul-container">
      <div className="ul-products">
        <div className="ul-inner-container">
          <UlSectionHeading />

          <div className="row ul-bs-row">
            <div className="col-lg-3 col-md-4 col-12">
              <UlProductsSubBanner />
            </div>

            <div className="col-lg-9 col-md-8 col-12">
              <SwiperProducts/>
              <SliderActions/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}