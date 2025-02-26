import { Link } from "react-router-dom";
import 'nouislider/dist/nouislider.css'; // Import noUiSlider CSS
import { useEffect, useRef } from "react";
import noUiSlider from 'nouislider';

export default function ProductsFilter() {
  const sliderRef = useRef(null); // Ref for the slider container

  useEffect(() => {
    // Initialize noUiSlider
    if (sliderRef.current) {
      // Destroy the previous slider instance if it exists
      if (sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }

      // Initialize noUiSlider
      noUiSlider.create(sliderRef.current, {
        start: [20, 80], // Initial values (e.g., [min, max])
        connect: true, // Connect the two handles
        range: {
          min: 0, // Minimum value
          max: 100, // Maximum value
        },
      });

      // Add event listeners (optional)
      sliderRef.current.noUiSlider.on('update', (values) => {
        // coding
      });
    }
      // Cleanup on unmount
    return () => {
      if (sliderRef.current && sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy(); 
      }
    };
  }, []);
  return (
    <div className="col-lg-3 col-md-4">
      <div className="ul-products-sidebar">

        {/* single widget / search */}
        <div className="ul-products-sidebar-widget ul-products-search">
          <form action="#" className="ul-products-search-form">
            <input type="text" name="product-search" id="ul-products-search-field" placeholder="Search Items" />
            <button><i className="flaticon-search-interface-symbol" /></button>
          </form>
        </div>

        {/* single widget / price filter */}
        <div className="ul-products-sidebar-widget ul-products-price-filter">
          <h3 className="ul-products-sidebar-widget-title">Filter by price</h3>
          <form action="#" className="ul-products-price-filter-form">
            <div ref={sliderRef} id="ul-products-price-filter-slider" />
            <span className="filtered-price">$19 - $69</span>
          </form>
        </div>

        {/* single widget / categories */}
        <div className="ul-products-sidebar-widget ul-products-categories">
          <h3 className="ul-products-sidebar-widget-title">Categories</h3>
          <div className="ul-products-categories-link">
            <Link to="#"><span><i className="flaticon-arrow-point-to-right" /> Lifestyle</span></Link>
            <Link to="#"><span><i className="flaticon-arrow-point-to-right" /> Beauty &amp; Fashion</span></Link>
            <Link to="#"><span><i className="flaticon-arrow-point-to-right" /> Fitness &amp; Health</span></Link>
            <Link to="#"><span><i className="flaticon-arrow-point-to-right" /> Food &amp; Cooking</span></Link>
            <Link to="#"><span><i className="flaticon-arrow-point-to-right" /> Tech &amp; Gadgets</span></Link>
            <Link to="#"><span><i className="flaticon-arrow-point-to-right" /> Entertainment</span></Link>
          </div>
        </div>

        {/* single widget / color filter */}
        <div className="ul-products-sidebar-widget ul-products-color-filter">
          <h3 className="ul-products-sidebar-widget-title">Filter By Color</h3>
          <div className="ul-products-color-filter-colors">
            <Link to="shop.html" className="black">
              <span className="left"><span className="color-prview" /> Black</span>
              <span>14</span>
            </Link>
            <Link to="shop.html" className="green">
              <span className="left"><span className="color-prview" /> Green</span>
              <span>14</span>
            </Link>
            <Link to="shop.html" className="blue">
              <span className="left"><span className="color-prview" /> Blue</span>
              <span>14</span>
            </Link>
            <Link to="shop.html" className="red">
              <span className="left"><span className="color-prview" /> Red</span>
              <span>14</span>
            </Link>
            <Link to="shop.html" className="yellow">
              <span className="left"><span className="color-prview" /> Yellow</span>
              <span>14</span>
            </Link>
            <Link to="shop.html" className="brown">
              <span className="left"><span className="color-prview" /> Brown</span>
              <span>14</span>
            </Link>
            <Link to="shop.html" className="white">
              <span className="left"><span className="color-prview" /> White</span>
              <span>14</span>
            </Link>
          </div>
        </div>

        {/* single widget /product status*/}
        <div className="ul-products-sidebar-widget">
          <h3 className="ul-products-sidebar-widget-title">Product Status</h3>
          <div className="ul-products-categories-link">
            <Link to="#"><span><i className="flaticon-arrow-point-to-right" /> In stock</span></Link>
            <Link to="#"><span><i className="flaticon-arrow-point-to-right" /> On Sale</span></Link>
          </div>
        </div>

        {/* single widget / size filter */}
        <div className="ul-products-sidebar-widget">
          <h3 className="ul-products-sidebar-widget-title">Filter By Sizes</h3>
          <div className="ul-products-color-filter-colors">
            <Link to="shop.html"><span className="left">S</span><span>14</span></Link>
            <Link to="shop.html"><span className="left">L</span><span>14</span></Link>
            <Link to="shop.html"><span className="left">M</span><span>14</span></Link>
            <Link to="shop.html"><span className="left">XL</span><span>14</span></Link>
            <Link to="shop.html"><span className="left">XXL</span><span>14</span></Link>
          </div>
        </div>

        {/* single widget / review */}
        <div className="ul-products-sidebar-widget ul-products-rating-filter">
          <h3 className="ul-products-sidebar-widget-title">Review Star</h3>
          <div className="ul-products-rating-filter-ratings">
            {/* single rating filter */}
            <div className="single-rating-wrapper">
              <label htmlFor="ul-products-review-5-star">
                <span className="left">
                  <input type="checkbox" name="jo-checkout-agreement" id="ul-products-review-5-star" hidden />
                  <span className="stars">
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                  </span>
                </span>
                <span className="right">5 Only</span>
              </label>
            </div>
            {/* single rating filter */}
            <div className="single-rating-wrapper">
              <label htmlFor="ul-products-review-4-star">
                <span className="left">
                  <input type="checkbox" name="jo-checkout-agreement" id="ul-products-review-4-star" hidden />
                  <span className="stars">
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                  </span>
                </span>
                <span className="right">4 &amp; up</span>
              </label>
            </div>
            {/* single rating filter */}
            <div className="single-rating-wrapper">
              <label htmlFor="ul-products-review-3-star">
                <span className="left">
                  <input type="checkbox" name="jo-checkout-agreement" id="ul-products-review-3-star" hidden />
                  <span className="stars">
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                  </span>
                </span>
                <span className="right">3 &amp; up</span>
              </label>
            </div>
            {/* single rating filter */}
            <div className="single-rating-wrapper">
              <label htmlFor="ul-products-review-2-star">
                <span className="left">
                  <input type="checkbox" name="jo-checkout-agreement" id="ul-products-review-2-star" hidden />
                  <span className="stars">
                    <span><i className="flaticon-star" /></span>
                    <span><i className="flaticon-star" /></span>
                  </span>
                </span>
                <span className="right">2 &amp; up</span>
              </label>
            </div>
            {/* single rating filter */}
            <div className="single-rating-wrapper">
              <label htmlFor="ul-products-review-1-star">
                <span className="left">
                  <input type="checkbox" name="jo-checkout-agreement" id="ul-products-review-1-star" hidden />
                  <span className="stars">
                    <span><i className="flaticon-star" /></span>
                  </span>
                </span>
                <span className="right">1 &amp; up</span>
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
