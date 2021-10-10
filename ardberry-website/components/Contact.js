const Contact = () => {
  return (
    <div className="md:grid-cols-2 grid-cols-1 bg-black grid gap-12">
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7527.782659687421!2d84.76155482485397!3d19.373857516371487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8af2c521d6a6614e!2sArdberry%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1633894066749!5m2!1sen!2sin"
          width="100%"
          height="100%;"
        />
      </div>
      <div className="md:grid-cols-2 grid-cols-1 py-8 md:px-0 px-4 grid gap-12">
        <div>
          <div className="text-2xl font-medium text-themeGolden">
            <h6 className="tracking-wider">
              Partner with us for the imagery of your new project. Let us know
              how we can help.
            </h6>
          </div>
          <div className="text-base pt-8 pb-4 text-white">
            <p> Contact: (+91) 782-386-1667</p>
          </div>
          <div className="py-4">
            <h6 className="text-2xl font-medium tracking-wider text-white">
              Dont Forget to Suscribe us
            </h6>
            <form>
              <input
                type="text"
                className="py-4 bg-gray-800 my-2 w-full text-white"
                placeholder="Your Name"
                style={{ backgroundColor: '#373737' }}
                required
              />
              <input
                type="email"
                className="py-4 bg-gray-800 my-2 w-full text-white"
                placeholder="Your Email"
                style={{ backgroundColor: '#373737' }}
                required
              />
              <button
                type="submit"
                className="py-1.5 mt-2 px-4 bg-themeGolden text-sm"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
