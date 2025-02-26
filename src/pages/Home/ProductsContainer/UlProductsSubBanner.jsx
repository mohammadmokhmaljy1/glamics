import Image2 from './../../../assets/img/products-sub-banner-1.jpg'

export default function UlProductsSubBanner() {
  return (
    <div className="ul-products-sub-banner">
      <div className="ul-products-sub-banner-img">
        <img src={Image2} alt="Sub Banner Image" />
      </div>
      <div className="ul-products-sub-banner-txt">
        <h3 className="ul-products-sub-banner-title">Trending Now Only This Weekend!</h3>
        <a href="shop.html" className="ul-btn">Shop Now <i className="flaticon-up-right-arrow" /></a>
      </div>
    </div>
  )
}