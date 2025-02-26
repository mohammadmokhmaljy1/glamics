import ImageSlider from "./ImageSlider"
import DetailsContent from "./DetailsContent"

export default function DetailsCard() {
  return (
        <div className="ul-product-details-top">
          <div className="row ul-bs-row row-cols-lg-2 row-cols-1 align-items-center">
              {/* img slider */}
            <ImageSlider/>
              {/* content */}
            <DetailsContent/>
          </div>
    </div>
  )
}
