import AboutUs from 'components/Home/AboutUs'
import Gallery from 'components/Home/Gallery'
import HeaxgonDiv from 'components/Home/HexagonDiv'
import HomeCarousel from 'components/Home/homeCarousel'
import PunchLine from 'components/Home/PunchLine'
import WhoAreWe from 'components/Home/WhoAreWe'
import Navbar from 'components/navbar'
import 'tailwindcss/tailwind.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <AboutUs />
      <HeaxgonDiv />
      <PunchLine />
      <Gallery />
      <WhoAreWe />
    </>
  )
}

export default Home
