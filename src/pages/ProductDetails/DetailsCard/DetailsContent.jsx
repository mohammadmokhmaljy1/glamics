import { useState } from "react";
import { Link } from "react-router-dom";

export default function DetailsContent() {
  const [Quantity, setQuantity] = useState() // coding

  return (
    <div className="col">
      <div className="ul-product-details-txt">
        {/* product rating */}
        <div className="ul-product-details-rating">
          <span className="rating">
            <i className="flaticon-star" />
            <i className="flaticon-star" />
            <i className="flaticon-star" />
            <i className="flaticon-star" />
            <i className="flaticon-star" />
          </span>
          <span className="review-number">(2 Customer Reviews)</span>
        </div>
        {/* price */}
        <span className="ul-product-details-price">$120.00</span>
        {/* product title */}
        <h3 className="ul-product-details-title">Front view modern dark sunglasses</h3>
        {/* product description */}
        <p className="ul-product-details-descr">Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.</p>
        {/* product options */}
        <div className="ul-product-details-options">
          <div className="ul-product-details-option ul-product-details-sizes">
            <span className="title">Size</span>
            <form action="#" className="variants">
              <label htmlFor="ul-product-details-size-1">
                <input type="radio" name="product-size" id="ul-product-details-size-1" defaultChecked hidden />
                <span className="size-btn">S</span>
              </label>
              <label htmlFor="ul-product-details-size-2">
                <input type="radio" name="product-size" id="ul-product-details-size-2" hidden />
                <span className="size-btn">M</span>
              </label>
              <label htmlFor="ul-product-details-size-3">
                <input type="radio" name="product-size" id="ul-product-details-size-3" hidden />
                <span className="size-btn">L</span>
              </label>
              <label htmlFor="ul-product-details-size-4">
                <input type="radio" name="product-size" id="ul-product-details-size-4" hidden />
                <span className="size-btn">XL</span>
              </label>
              <label htmlFor="ul-product-details-size-5">
                <input type="radio" name="product-size" id="ul-product-details-size-5" hidden />
                <span className="size-btn">XXL</span>
              </label>
            </form>
          </div>
          <div className="ul-product-details-option ul-product-details-colors">
            <span className="title">Color</span>
            <form action="#" className="variants">
              <label htmlFor="ul-product-details-color-1">
                <input type="radio" name="product-color" id="ul-product-details-color-1" defaultChecked hidden />
                <span className="color-btn green" />
              </label>
              <label htmlFor="ul-product-details-color-2">
                <input type="radio" name="product-color" id="ul-product-details-color-2" hidden />
                <span className="color-btn blue" />
              </label>
              <label htmlFor="ul-product-details-color-3">
                <input type="radio" name="product-color" id="ul-product-details-color-3" hidden />
                <span className="color-btn brown" />
              </label>
              <label htmlFor="ul-product-details-color-4">
                <input type="radio" name="product-color" id="ul-product-details-color-4" hidden />
                <span className="color-btn red" />
              </label>
            </form>
          </div>
        </div>
        {/* product quantity */}
        <div className="ul-product-details-option ul-product-details-quantity">
          <span className="title">Quantity</span>
          <form action="#" className="ul-product-quantity-wrapper">
            <input type="number" name="product-quantity" id="ul-product-details-quantity" className="ul-product-quantity" defaultValue={1} min={1} readOnly />
            <div className="btns">
              <button type="button" className="quantityIncreaseButton"><i className="flaticon-plus" /></button>
              <button type="button" className="quantityDecreaseButton"><i className="flaticon-minus-sign" /></button>
            </div>
          </form>
        </div>
        {/* product actions */}
        <div className="ul-product-details-actions">
          <div className="left">
            <button className="add-to-cart">Add to Cart <span className="icon"><i className="flaticon-cart" /></span></button>
            <button className="add-to-wishlist"><span className="icon"><i className="flaticon-heart" /></span> Add to wishlist</button>
          </div>
          <div className="share-options">
            <button><i className="flaticon-facebook-app-symbol" /></button>
            <button><i className="flaticon-twitter" /></button>
            <button><i className="flaticon-linkedin-big-logo" /></button>
            <Link href="#"><i className="flaticon-youtube" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
