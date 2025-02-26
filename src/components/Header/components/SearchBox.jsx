import { useEffect } from 'react'

import './../../../../node_modules/slim-select/dist/slimselect.css'
import SlimSelect from 'slim-select'

export default function SearchBox() {
  useEffect(() => {
    new SlimSelect({
      select: '#ul-header-search-category'
    })
  },[]) 
  return (
      <div className="ul-header-search-form-wrapper flex-grow-1 flex-shrink-0">
      <form action="#" className="ul-header-search-form">
        <div className="dropdown-wrapper">
          <select name="search-category" id="ul-header-search-category">
            <option data-placeholder="true">Select Category</option>
            <option value={1}>Watches, Bags, Jewellery</option>
            <option value={1}>Watches, Bags, Jewellery</option>
            <option value={1}>Watches, Bags, Jewellery</option>
          </select>
        </div>
        <div className="ul-header-search-form-right">
          <input type="search" name="header-search" id="ul-header-search" placeholder="Search Here" />
          <button type="submit"><span className="icon"><i className="flaticon-search-interface-symbol" /></span></button>
        </div>
      </form>
      <button className="ul-header-mobile-search-closer d-xxl-none"><i className="flaticon-close" /></button>
    </div>
  )
}
