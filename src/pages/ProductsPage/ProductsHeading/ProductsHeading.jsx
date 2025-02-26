import { Link } from "react-router-dom";

export default function ProductsHeading() {
  return (
    <div className="ul-container">
      <div className="ul-breadcrumb">
        <h2 className="ul-breadcrumb-title">Shop Left Sidebar</h2>
        <div className="ul-breadcrumb-nav">
          <Link to="/"><i className="flaticon-home" /> Home</Link>
          <i className="flaticon-arrow-point-to-right" />
          <span className="current-page">Shop</span>
        </div>
      </div>
    </div>
  )
}
