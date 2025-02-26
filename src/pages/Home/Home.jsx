import CategoriesContainer from './CategoriesContainer/CategoriesContainer'
import HeroSlider from './HeroSlider/HeroSlider'
import ProductsContainer from './ProductsContainer/ProductsContainer'
import ReviewsContainer from './ReviewsContainer/ReviewsContainer'
import NewsletterSubscribe from './NewsletterSubscribe/NewsletterSubscribe'

export default function Home() {
  return (
    <main>
      <HeroSlider/>
      <CategoriesContainer/>
      <ProductsContainer/>
      <ReviewsContainer/>
      <NewsletterSubscribe/>
    </main>
  )
}
