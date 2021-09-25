import { useState } from 'react'
import HomeCatalalogModalTemplate from './HomeCatalogModalTemplate'

const HomeCatalalogSingle = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState()

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div
      className="bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${props.content.Image})`,
      }}
    >
      <div className="flex flex-col items-center justify-center relative py-4 h-420">
        <div className="">
          <div className="flex flex-row items-center justify-center">
            <h4 className="uppercase text-2xl text-bold text-white">
              {props.content.Name}
            </h4>
          </div>
          <div className="flex flex-row items-center w-80 pt-6 mx-auto justify-center">
            <p className="text-sm text-gray-400 text-center">
              {props.content.Caption}
            </p>
          </div>
          <div className="flex flex-row items-center w-80 pt-6 mx-auto justify-center">
            <button
              onClick={() => {
                openModal(), setModalData(props)
              }}
              className="p-4 tracking-wider rounded text-xs uppercase bg-themeGolden"
            >
              View Service
            </button>
          </div>
          {isOpen && (
            <HomeCatalalogModalTemplate
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              closeModal={closeModal}
              modalData={modalData}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default HomeCatalalogSingle
