import { Link } from 'react-router-dom'
import Image1 from './../../assets/img/product-img-1.jpg'

export default function ProductCard({product}) {
  return (
    <div className="ul-product">
      <div className="ul-product-heading">
        <span className="ul-product-price">$98.00</span>
        <span className="ul-product-discount-tag">24% Off</span>
      </div>
      <div className="ul-product-img">
        <img src={Image1} alt="Product Image" />
        <div className="ul-product-actions">
          <button><i className="flaticon-shopping-bag" /></button>
          <a href="#"><i className="flaticon-hide" /></a>
          <button><i className="flaticon-heart" /></button>
        </div>
      </div>
      <div className="ul-product-txt">
        <h4 className="ul-product-title"><Link to={`/products/${product?.id}`}>Orange Airsuit</Link></h4>
        <h5 className="ul-product-category"><Link to="/products">Fashion Bag</Link></h5>
      </div>
    </div>
  )
}
