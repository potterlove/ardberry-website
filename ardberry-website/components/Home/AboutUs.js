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
                <br />
                  We provide unique designs that are customized to our client's needs, and our production is indigenously done, reducing dependency and latency from the international market. Our products are highly price efficient as we are a material liberal, asset-free, and made-to-order company. We reduce our production time with our standardized parametric and just-in-time production method, along with our team of 1000+ installers and CNC fabricators.
                  <br /> Our target clientele includes high-end interior projects like HORECA, experience centers, and TV sets. Our portfolio provides amazing substitutes for imported architectural materials in India, making us a perfect choice for clients looking for unique and cost-effective designs.
                  <br /> Ardberry's product line includes a wide range of architectural products that are designed using mathematical algorithms. Our products are unique, customized, and affordable, making us a perfect choice for high-end interior projects. Our services include installation, maintenance, and repairs for our products. We also provide consultancy services to our clients to help them choose the right product for their needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
