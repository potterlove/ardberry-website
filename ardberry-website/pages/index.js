import AboutUs from 'components/HomePage/AboutUs'
import HeaxgonDiv from 'components/HomePage/HexagonDiv'
import HomeCarousel from 'components/HomePage/homeCarousel'
import Navbar from 'components/navbar'
import 'tailwindcss/tailwind.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <AboutUs />
      <HeaxgonDiv />
    </>
  )
}

export default Home
