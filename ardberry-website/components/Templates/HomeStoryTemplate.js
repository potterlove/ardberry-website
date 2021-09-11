const HomeStoryTemplate = ({ people }) => {
  return (
    <div className="pt-4">
      <div className="uppercase text-xl">{people.name}</div>
      <div className="uppercase text-base text-gray-500">
        {people.designation}
      </div>
      <p className="text-justify text-sm pt-2">{people.content}</p>
    </div>
  )
}

export default HomeStoryTemplate
