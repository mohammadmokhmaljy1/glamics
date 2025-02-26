
export default function ReviewForm() {
  return (
    <div className="ul-product-details-review-form-wrapper">
      <h3 className="ul-product-details-inner-title">Write A Review</h3>
      <span className="note">Your email address will not be published.</span>
      <form className="ul-product-details-review-form">
        <div className="form-group rating-field-wrapper">
          <span className="title">Rate this product? *</span>
          <div className="rating-field">
            <button type="button"><i className="flaticon-star-3" /></button>
            <button type="button"><i className="flaticon-star-3" /></button>
            <button type="button"><i className="flaticon-star-3" /></button>
            <button type="button"><i className="flaticon-star-3" /></button>
            <button type="button"><i className="flaticon-star-3" /></button>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-xxs-1 ul-bs-row">
          <div className="form-group">
            <input type="text" name="review-name" id="review-name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="email" name="review-email" id="review-email" placeholder="Your Email" />
          </div>
          <div className="form-group col-12">
            <textarea name="review-message" id="review-message" placeholder="Your Review" defaultValue={""} />
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Post Review <span><i className="flaticon-up-right-arrow" /></span></button>
        </div>
      </form>
    </div>

  )
}
