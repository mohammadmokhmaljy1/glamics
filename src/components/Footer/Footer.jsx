import Image1 from './../../assets/img/payment-methods.png'
import Image2 from './../../assets/img/android.png'
import Image3 from './../../assets/img/ios.png'
import Image4 from "./../../assets/img/logo-white.svg"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="ul-footer">
      <div className="ul-inner-container">
        <div className="ul-footer-top">
          {/* single links column */}
          <div className="ul-footer-top-widget">
            <h3 className="ul-footer-top-widget-title">Brands</h3>
            <div className="ul-footer-top-widget-links">
              <Link to="#">Zara</Link>
              <Link to="#">Guess</Link>
              <Link to="#">Mango</Link>
              <Link to="#">LCWaikiki</Link>
              <Link to="#">Monda</Link>
            </div>
          </div>
          {/* single links column */}
          <div className="ul-footer-top-widget">
            <h3 className="ul-footer-top-widget-title">Categories</h3>
            <div className="ul-footer-top-widget-links">
              <Link to="#">Watches</Link>
              <Link to="#">Watch Accessories</Link>
              <Link to="#">Clocks</Link>
              <Link to="#">Jewellery</Link>
              <Link to="#">Women’s Collection</Link>
            </div>
          </div>
          {/* single links column */}
          <div className="ul-footer-top-widget">
            <h3 className="ul-footer-top-widget-title">Accessories</h3>
            <div className="ul-footer-top-widget-links">
              <Link to="#">Order Tracking</Link>
              <Link to="#">Terms &amp; Conditions</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Tutorials</Link>
              <Link to="#">FAQ</Link>
            </div>
          </div>
          {/* single links column */}
          <div className="ul-footer-top-widget">
            <h3 className="ul-footer-top-widget-title">Services</h3>
            <div className="ul-footer-top-widget-links">
              <Link to="#">Sale</Link>
              <Link to="#">Quick Ship</Link>
              <Link to="#">New Designs</Link>
              <Link to="#">Protection Plan</Link>
              <Link to="#">Gift Cards</Link>
            </div>
          </div>
          {/* single links column */}
          <div className="ul-footer-top-widget">
            <h3 className="ul-footer-top-widget-title">Policies</h3>
            <div className="ul-footer-top-widget-links">
              <Link to="#">Policy</Link>
              <Link to="#">Dressy Inside</Link>
              <Link to="#">About Us</Link>
              <Link to="#">Company</Link>
              <Link to="#">Careers</Link>
            </div>
          </div>
          {/* single links column */}
          <div className="ul-footer-top-widget">
            <h3 className="ul-footer-top-widget-title">Help</h3>
            <div className="ul-footer-top-widget-links">
              <Link to="#">Contact us</Link>
              <Link to="#">About us</Link>
              <Link to="#">Reviews</Link>
              <Link to="#">Terms of Service</Link>
              <Link to="#">Refund policy</Link>
            </div>
          </div>
        </div>
        <div className="ul-footer-middle">
          {/* single widget */}
          <div className="ul-footer-middle-widget">
            <h3 className="ul-footer-middle-widget-title">Download Our Apps</h3>
            <div className="ul-footer-middle-widget-content">
              <div className="app-links">
                <Link to="#"><img src={Image2} alt="Play Store Link Image" /></Link>
                <Link to="#"><img src={Image3} alt="App Store Link Image" /></Link>
              </div>
            </div>
          </div>
          {/* single widget */}
          <div className="ul-footer-middle-widget">
            <h3 className="ul-footer-middle-widget-title">Follow us</h3>
            <div className="ul-footer-middle-widget-content">
              <div className="social-links">
                <Link to="#"><i className="flaticon-facebook-app-symbol" /></Link>
                <Link to="#"><i className="flaticon-twitter" /></Link>
                <Link to="#"><i className="flaticon-linkedin-big-logo" /></Link>
                <Link to="#"><i className="flaticon-youtube" /></Link>
              </div>
            </div>
          </div>
          {/* single widget */}
          <div className="ul-footer-middle-widget">
            <h3 className="ul-footer-middle-widget-title">Need help? Call now!</h3>
            <div className="ul-footer-middle-widget-content">
              <div className="contact-nums">
                <Link to="tel:1234567890">(500) 8001 8588</Link>, <Link to="tel:1234567890">(500) 544 6550</Link>
              </div>
            </div>
          </div>
          {/* single widget */}
          <div className="ul-footer-middle-widget align-self-center">
            <Link to="/"><img src={Image4} alt="logo" className="logo" /></Link>
          </div>
        </div>
        <div className="ul-footer-bottom">
          <p className="copyright-txt">Copyright 2024 © glamer Template Kits</p>
          <img src={Image1} alt="payment methods logos" />
        </div>
      </div>
    </footer>
  )
}
