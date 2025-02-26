import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";


export default function SplideTopHeader() {

  const options = {
    arrows: false,
    pagination: false,
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 9,
    autoWidth: true,
    gap: 15,
    autoScroll: {
      speed: 1.5,
    },
  }

  return (
    <Splide options={options} extensions={{ AutoScroll }}>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
      <SplideSlide><p className="ul-header-top-slider-item"><i className="flaticon-sparkle" /> limited time offer</p></SplideSlide>
    </Splide>
  )
}
