import HomeCatalalogSingle from 'components/Templates/HomeCatalalogSingle'
import CatalogHome from 'constants/CatalogHome'

const HomeCatalog = () => {
  return (
    <div className="mx-0 my-8">
      <div className="py-8">
        <h2 className="text-center md:text-4xl text-3xl uppercase">
          <span className="bg-themeGolden p-1">Our Projects</span> and
          Experiments
        </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-0 gap-y-4">
        {CatalogHome.map((content, index) => (
          <HomeCatalalogSingle content={content} key={index} />
        ))}
      </div>
    </div>
  )
}

export default HomeCatalog
