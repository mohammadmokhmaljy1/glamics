  //componenets
import ProductsHeading from './ProductsHeading/ProductsHeading'
import ProductsFilter from "./ProductsFilter/ProductsFilter"
import ProductsContainer from "./ProductsContainer/ProductsContainer.jsx"
export default function ProductsPage() {
  return (<>
    <ProductsHeading/>
    <div className="ul-inner-page-container">
      <div className="ul-inner-products-wrapper">
        <div className="row ul-bs-row flex-column-reverse flex-md-row">
          <ProductsFilter/>
          <ProductsContainer/>
        </div>
      </div>
    </div>
  </>)
}
