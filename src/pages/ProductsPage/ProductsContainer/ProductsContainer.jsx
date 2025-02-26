import { NavLink } from "react-router-dom";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { GetAllProducts } from "../../../api/productsApi";

export default function ProductsContainer() {
  const [data, setData] = useState(false)
  useEffect(() => {
    async function FetchProducts() {
      try {
        const res = await GetAllProducts()
        if(res.status === 200) setData(res.data.data)
      } catch(err) {
        console.log(err)
      }
    }
    FetchProducts()
  },[]) 
  return (
    <div className="col-lg-9 col-md-8">
      <div className="row ul-bs-row row-cols-lg-3 row-cols-2 row-cols-xxs-1">
        {data && data.map((product) => <div className="col" key={product.id}> <ProductCard product={product}/></div>)}
      </div>
      <div className="ul-pagination">
        <ul>
          <li><a href="#"><i className="flaticon-left-arrow" /></a></li>
          <li className="pages">
            <NavLink name={"pagination"} href="#" className="active">01</NavLink>
            <NavLink name={"pagination"} href="#">02</NavLink>
            <NavLink name={"pagination"} href="#">03</NavLink>
            <NavLink name={"pagination"} href="#">04</NavLink>
            <NavLink name={"pagination"} href="#">05</NavLink>
          </li>
          <li><a href="#"><i className="flaticon-arrow-point-to-right" /></a></li>
        </ul>
      </div>
    </div>
  )
}
