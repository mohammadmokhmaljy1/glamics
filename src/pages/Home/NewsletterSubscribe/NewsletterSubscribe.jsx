
export default function NewsletterSubscribe() {
  return (
    <div className="ul-container">
      <section className="ul-nwsltr-subs">
        <div className="ul-inner-container">
          {/* heading */}
          <div className="ul-section-heading justify-content-center text-center">
            <div>
              <span className="ul-section-sub-title text-white">GET NEWSLETTER</span>
              <h2 className="ul-section-title text-white text-white">Sign Up to Newsletter</h2>
            </div>
          </div>
          {/* form */}
          <div className="ul-nwsltr-subs-form-wrapper">
            <div className="icon"><i className="flaticon-airplane" /></div>
            <form action="#" className="ul-nwsltr-subs-form">
              <input type="email" name="nwsltr-subs-email" id="nwsltr-subs-email" placeholder="Enter Your Email" />
              <button type="submit">Subscribe Now <i className="flaticon-up-right-arrow" /></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
