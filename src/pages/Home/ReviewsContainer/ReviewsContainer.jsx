
import ReviewHeading from './ReviewHeading/ReviewHeading';
import SwiperContainer from './Swiper/SwiperContainer';

export default function ReviewsContainer() {
  return (
    <section className="ul-reviews overflow-hidden">
      <ReviewHeading />
      <SwiperContainer/>
    </section>
  );
}