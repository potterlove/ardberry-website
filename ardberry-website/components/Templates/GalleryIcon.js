import { useState } from 'react'
import ImageModal from './ModalImage'

const GalleryIcon = props => {
  let [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }
  return (
    <>
      <div className="rounded-3xl hover:p-3 cursor-pointer bg-white md:p-4 p-8">
        <img
          onClick={openModal}
          className="max-w-full md:h-56 h-96"
          src={`/images/${props.image}`}
          height="400"
          width="600"
        />
        <ImageModal
          image={`/images/${props.image}`}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  )
}

export default GalleryIcon
