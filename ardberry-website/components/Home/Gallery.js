import GalleryIcon from 'components/Templates/GalleryIcon'
import galleryImages from 'constants/GalleryImages'

const Gallery = () => {
  return (
    <div className="w-full py-12 px-12 bg-themeGolden">
      <div className="text-4xl font-medium pb-8 text-center">
        Our Inspirationl Designs
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 gap-8">
        {galleryImages.map((image, index) => (
          <GalleryIcon key={index} image={image} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
