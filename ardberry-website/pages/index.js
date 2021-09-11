import AboutUs from 'components/HomePage/AboutUs'
import HomeCarousel from 'components/HomePage/homeCarousel'
import Navbar from 'components/navbar'
import 'tailwindcss/tailwind.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <AboutUs />
    </>
  )
}

export default Home
