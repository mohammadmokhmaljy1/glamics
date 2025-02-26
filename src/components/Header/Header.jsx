  // css files
import './Header.css'

  // logo image 
import LogoImage from "./../../assets/img/logo.svg"

  // components
import SplideTopHeader from './components/SplideTopHeader'
import SearchBox from './components/SearchBox'
import NavigationLinks from './components/NavigationLinks'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
  <header className="ul-header">
      {/* header top */}
    <div className="ul-header-top">
        <SplideTopHeader/>
    </div>
      {/* header bottom */}
    <div className="ul-header-bottom">
      <div className="ul-container">
        <div className="ul-header-bottom-wrapper">
            {/* header left */}
          <div className="header-bottom-left">
            <div className="logo-container">
              <Link to="/" className="d-inline-block"><img src={LogoImage} alt="logo" className="logo" /></Link>
            </div>
            <SearchBox/>
          </div>

            {/* header nav */}
          <NavigationLinks/>

            {/* actions */}
          <div className="ul-header-actions">
            <button className="ul-header-mobile-search-opener d-xxl-none"><i className="flaticon-search-interface-symbol" /></button>
            <button><i className="flaticon-user" /></button>
            <button><i className="flaticon-heart" /></button>
            <button><i className="flaticon-shopping-bag" /></button>
          </div>
          
            {/* sidebar opener */}
          <div>
            <button className="ul-header-sidebar-opener"><i className="flaticon-hamburger" /></button>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
