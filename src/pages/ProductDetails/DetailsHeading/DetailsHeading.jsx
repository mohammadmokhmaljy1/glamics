import { Link } from 'react-router-dom'

export default function DetailsHeading() {
  return (
    <div className="ul-container">
      <div className="ul-breadcrumb">
        <h2 className="ul-breadcrumb-title">Shop Details</h2>
        <div className="ul-breadcrumb-nav">
          <Link to="/"><i className="flaticon-home" /> Home</Link>
          <i className="flaticon-arrow-point-to-right" />
          <Link href="/products">Shop</Link>
          <i className="flaticon-arrow-point-to-right" />
          <span className="current-page">Shop Details</span>
        </div>
      </div>
    </div>
  )
}
