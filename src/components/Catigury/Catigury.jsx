import { Link } from 'react-router-dom'
import Image1 from './../../assets/img/category-1.jpg'
import './Category.css'
export default function Category() {
  return (
    <div className="col">
      <Link className="ul-category" to="/products">
        <div className="ul-category-img">
          <img src={Image1} alt="Category"/>
        </div>
        <div className="ul-category-txt">
          <span>Pants</span>
        </div>
        <div className="ul-category-btn">
          <span><i className="flaticon-arrow-point-to-right" /></span>
        </div>
      </Link>
    </div>
  )
}
