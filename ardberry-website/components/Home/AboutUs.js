const AboutUs = () => {
  return (
    <div
      className="bg-white m-p12 z-10 relative shadow-lg mb-10 rounded-sm"
      style={{ marginTop: '-5%' }}
    >
      <div className="grid about-us-block">
        <div className="sm:p-20 p-14 flex flex-col items-center justify-center">
          <img src="/images/at.png" alt="" />
        </div>
        <div className="lg:p-4 p-6 lg:pl-0 lg:pr-8">
          <div className="text-justify">
            <h2 className="text-3xl py-4 text-center font-medium"> About Us</h2>
            <div>
              <p className="text-sm">
                Ardberry is an Indian parametric design boutique that designs and manufactures architectural products using mathematical algorithms. Our mission is to create stunning and affordable designs that elevate the class of any space. Our team of aesthetes with heightened perception of beautiful structures has been internationally recognized as top 10 designers in the world for their fabulous design of Notre dame de paris.
                <br /> We are a group of researchers and Design enthusiasts, we
                are trying to merge different domains of sciences to create
                surreal, exquisite and bespoke architectural products. We are
                recognized and supported by Govt. of Rajasthan and also been
                honored and felicitated as top designers in various National and
                International design platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
