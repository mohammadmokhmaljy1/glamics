  // components
import DetailsHeading from "./DetailsHeading/DetailsHeading.jsx"
import DetailsCard from "./DetailsCard/DetailsCard.jsx"
import Discreption from "./Discreption/Discreption.jsx"
import ReviewsDetails from "./ReviewsDetails/ReviewsDetails.jsx"
import ReviewForm from "./ReviewForm/ReviewForm.jsx"

  // import react hooks
import { useEffect, useState } from "react"

    // api
import { GetSingleProduct } from "../../api/productsApi.js"

  // router hooks
import { useNavigate, useParams } from "react-router-dom"

export default function ProductDetails() {
  const [data, setData] = useState(false)
  const param = useParams()
  const navigateTo = useNavigate()
  useEffect(() => {
    const id = param.id
    async function FetchProducts() {
      try {
        const res = await GetSingleProduct(id)
        if(res.status === 200) setData(JSON.stringify(res.data.data))
      } catch(err) {
        console.log(err)
        navigateTo("/")
      }
    }
    FetchProducts()
  },[location]) 

  console.log(data)
  return (<>
    <DetailsHeading/>
    <div className="ul-inner-page-container">
      <div className="ul-product-details">
        <DetailsCard/>
        <div className="ul-product-details-bottom">
          <Discreption/>
          <ReviewsDetails/>
          <ReviewForm/>
        </div>
      </div>
    </div>
  </>)
}
