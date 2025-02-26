import image1 from "./../../assets/img/review-author-1.png"

export default function ReviewCard() {
  return (
      <div className="ul-review">
        <div className="ul-review-rating">
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star-3" />
        </div>
        <p className="ul-review-descr">Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisl at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.</p>
        <div className="ul-review-bottom">
          <div className="ul-review-reviewer">
            <div className="reviewer-image"><img src={image1} alt="reviewer image" /></div>
            <div>
              <h3 className="reviewer-name">Esther Howard</h3>
              <span className="reviewer-role">Web Designer</span>
            </div>
          </div>
          {/* icon */}
          <div className="ul-review-icon"><i className="flaticon-left" /></div>
        </div>
      </div>
  )
}
