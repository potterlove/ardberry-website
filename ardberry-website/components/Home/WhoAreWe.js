import HomeStoryTemplate from 'components/Templates/HomeStoryTemplate'
import HomeStoryTemplateContent from 'constants/HomeStoryTemplateContent'

const WhoAreWe = () => {
  return (
    <div className="border-t-4 p-8 my-8 xl:mx-48 md:mx-32 mx-10 border-b-4 border-themeGolden">
      <h4 className="uppercase text-themeGolden font-medium text-xl">
        Who Are We?
      </h4>
      <p className="py-4 text-sm">
        The founder and directors of Team Ardberry, brings to the table the
        immense knowledge of data science and Automation along with CAD
        designing. They believe “more we penetrate new areas if innovation,
        higher the chances of creating something exquisite!” They were invited
        as top 75 startups of Rajasthan by CM Rajasthan in the launching of Jan
        soochna portal, GoR.
      </p>
      <p className="text-center w-auto xl:mx-56 md:mx-40 mx-24  text-themeGolden border-t-2 border-r-2">
        "A beautiful facade stories about physc of designer"
      </p>
      <div className="py-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {HomeStoryTemplateContent.map((people, index) => (
            <HomeStoryTemplate people={people} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe
