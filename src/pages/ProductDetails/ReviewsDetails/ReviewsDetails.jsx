import Image1 from "./../../../assets/img/reviewer-img-2.png"
export default function ReviewsDetails() {
  return (
    <div className="ul-product-details-reviews">
      <h3 className="ul-product-details-inner-title">02 Reviews</h3>
      {/* single review */}
      <div className="ul-product-details-review">
        {/* reviewer image */}
        <div className="ul-product-details-review-reviewer-img">
          <img src={Image1} alt="Reviewer Image" />
        </div>
        <div className="ul-product-details-review-txt">
          <div className="header">
            <div className="left">
              <h4 className="reviewer-name">Temptics Pro</h4>
              <h5 className="review-date">March 20, 2023 at 2:37 pm</h5>
            </div>
            <div className="right">
              <div className="rating">
                <i className="flaticon-star" />
                <i className="flaticon-star" />
                <i className="flaticon-star" />
                <i className="flaticon-star" />
                <i className="flaticon-star-3" />
              </div>
            </div>
          </div>
          <p>Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla quis erat tempor tristique eget vel purus. Nulla pharetra pharetra pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra, velit viverra lacinia consequat, ipsum odio mollis dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut dapibus nunc. Vivamus sit amet efficitur velit. Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla</p>
          <button className="ul-product-details-review-reply-btn">Reply</button>
        </div>
      </div>
      {/* single review */}
      <div className="ul-product-details-review">
        {/* reviewer image */}
        <div className="ul-product-details-review-reviewer-img">
          <img src={Image1} alt="Reviewer Image" />
        </div>
        <div className="ul-product-details-review-txt">
          <div className="header">
            <div className="left">
              <h4 className="reviewer-name">Temptics Pro</h4>
              <h5 className="review-date">March 20, 2023 at 2:37 pm</h5>
            </div>
            <div className="right">
              <div className="rating">
                <i className="flaticon-star" />
                <i className="flaticon-star" />
                <i className="flaticon-star" />
                <i className="flaticon-star" />
                <i className="flaticon-star-3" />
              </div>
            </div>
          </div>
          <p>Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla quis erat tempor tristique eget vel purus. Nulla pharetra pharetra pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra, velit viverra lacinia consequat, ipsum odio mollis dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut dapibus nunc. Vivamus sit amet efficitur velit. Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla</p>
          <button className="ul-product-details-review-reply-btn">Reply</button>
        </div>
      </div>
    </div>
  )
}
