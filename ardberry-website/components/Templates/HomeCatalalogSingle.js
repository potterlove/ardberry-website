const HomeCatalalogSingle = () => {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(/images/NotreDame01.jpg)',
      }}
    >
      <div className="flex flex-col items-center justify-center relative py-4 h-420">
        <div className="">
          <div className="flex flex-row items-center justify-center">
            <h4 className="uppercase text-2xl text-bold text-white">
              Notre Dame CATHEDRAL
            </h4>
          </div>
          <div className="flex flex-row items-center w-2/3 pt-6 mx-auto justify-center">
            <p className="text-sm text-gray-400 text-center">
              Got International honourable mention as top 10 designs in the
              world for re-designing Notre Dame de Paris
            </p>
          </div>
          <div className="flex flex-row items-center w-2/3 pt-6 mx-auto justify-center">
            <button className="p-4 tracking-wider rounded text-xs uppercase bg-themeGolden">
              View Service
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCatalalogSingle
