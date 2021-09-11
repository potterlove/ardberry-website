const AboutUs = () => {
  return (
    <div
      className="bg-white m-p15 z-10 relative shadow-lg mb-10 rounded-sm"
      style={{ marginTop: '-5%' }}
    >
      <div className="grid about-us-block">
        <div className="sm:p-20 p-14 flex flex-col items-center justify-center">
          <img src="/images/at.png" alt="" />
        </div>
        <div className="lg:p-4 p-4 lg:pl-0">
          <div className="text-justify">
            <h2 className="text-3xl py-4 text-center font-medium"> About Us</h2>
            <div>
              <p className="md:text-base text-sm">
                A lot of people in India do not consult an Architect or an
                Interior designer while designing their houses, because
                designing is an expensive affair for middle class house owners
                in India. The process of designing is actually a very expertise
                and hard-working job, that’s why it is expensive. Hence we
                design amazing and surreal architectural products and interiors
                with the approach of computational designs FREE OF COST. Hence
                once designed, we can alter or customize according to any
                customers’ needs.
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
