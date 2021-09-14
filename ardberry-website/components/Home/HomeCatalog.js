import HomeCatalalogSingle from 'components/Templates/HomeCatalalogSingle'

const HomeCatalog = () => {
  return (
    <div className="mx-0 my-8">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-0 gap-y-4">
        <HomeCatalalogSingle />

        <HomeCatalalogSingle />
        <HomeCatalalogSingle />
      </div>
    </div>
  )
}

export default HomeCatalog
