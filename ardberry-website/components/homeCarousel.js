import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import homeCarouselImages from 'constants/homeCarouselImages'

const HomeCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      stopOnHover={false}
      interval={2000}
      autoPlay={true}
      className="h-screen"
    >
      {homeCarouselImages.map((image, index) => (
        <div key={index}>
          <img className="h-screen" src={`/images/${image}`} />
        </div>
      ))}
    </Carousel>
  )
}

export default HomeCarousel
