import ServiceTheBestData from 'constants/ServiceTheBestData'

const ServiceTheBest = () => {
  return (
    <div className="w-full py-10 px-8">
      <div className="mt-8 mb-12">
        <h2 className="text-center md:text-4xl text-2xl">
          We Serve the Best Service
        </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 text-white">
        {ServiceTheBestData.map((data, index) => (
          <div
            key={index}
            className="w-full px-4 pt-4 bg-cover bg-center h-96"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${data.backgroundImage})`,
            }}
          >
            <div className="py-4">
              <h4 className="text-lg uppercase text-center text-wheat font-black">
                {data.heading}
              </h4>
            </div>
            <div className="pt-8">
              <ul>
                {data.points.map((point, index) => (
                  <li className="text-sm font-medium" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceTheBest
