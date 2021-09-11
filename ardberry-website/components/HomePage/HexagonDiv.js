import TriangleText from 'components/Templates/TriangleText'

const HeaxgonDiv = () => {
  return (
    <section className="padding clearfix fixbug-inline-block " id="why-us">
      <div className="container m-auto">
        <div className="row">
          <div className="title-block">
            <h2 className="title text-center text-4xl uppercase my-16">
              What we bring to the Table
            </h2>
          </div>
          <div className="chooseus-container text-center relative">
            <div className="chooseus-item relative">
              <TriangleText text={'Bespoke'} />
              <div className="chooseus-canvas-item">
                <svg className="svg-hexagon">
                  <polygon
                    className="hexagon"
                    points="285 100,285 250,155 325,25 250,25 100,155 25"
                  ></polygon>
                </svg>
                <svg className="svg-triangle-dotted">
                  <polygon
                    className="triangle-div"
                    points="2 220,254 220,128 0"
                  ></polygon>
                </svg>
                <div className="triangle-img-warp tri">
                  <img
                    src="https://assets.website-files.com/5c90aed857008a949f4008db/5c9e57c2215b2b0e6db55d82_ezgif.com-video-to-gif%20(3).gif"
                    style={{ width: '150%', maxWidth: '200%' }}
                    className="img-responsive align-middle"
                    alt="Ardberry Technology,Gallery,Art Pieces,Architecture,Paramateric Architecture,Kinetic Architecture,Notre Dame,Kia Motors,Mandala,Benediction,Twiddling Comfort,Furniture,Architecture"
                  />
                </div>
              </div>
            </div>
            <div className="chooseus-item">
              <TriangleText text={'Kinetics'} />
              <div className="chooseus-canvas-item">
                <svg className="svg-hexagon">
                  <polygon
                    className="hexagon"
                    points="285 100,285 250,155 325,25 250,25 100,155 25"
                  ></polygon>
                </svg>
                <svg className="svg-triangle-dotted svg-tri-2">
                  <polygon
                    className="triangle-div"
                    points="2 220,254 220,128 0"
                  ></polygon>
                </svg>
                <div className="triangle-img-warp tri2">
                  <img
                    src="https://weburbanist.com/wp-content/uploads/2015/03/sliding-house.gif"
                    style={{
                      width: '150%',
                      maxWidth: '200%',
                      transform: 'translateX(-90px)',
                    }}
                    className="img-responsive align-middle"
                    alt="Ardberry Technology,Gallery,Art Pieces,Architecture,Paramateric Architecture,Kinetic Architecture,Notre Dame,Kia Motors,Mandala,Benediction,Twiddling Comfort,Furniture,Architecture"
                  />
                </div>
              </div>
            </div>
            <div className="chooseus-item mgb0">
              <TriangleText text={'Cost Efficient'} />
              <div className="chooseus-canvas-item">
                <svg className="svg-hexagon">
                  <polygon
                    className="hexagon"
                    points="285 100,285 250,155 325,25 250,25 100,155 25"
                  ></polygon>
                </svg>
                <svg className="svg-triangle-dotted svg-tri-3">
                  <polygon
                    className="triangle-div"
                    points="2 220,254 220,128 0"
                  ></polygon>
                </svg>
                <div className="triangle-img-warp tri3">
                  <img
                    src="https://www.azobuild.com/images/Article_Images/ImageForArticle_8343(1).jpg"
                    style={{ width: '150%', maxWidth: '200%' }}
                    className="img-responsive align-middle"
                    alt="Ardberry Technology,Gallery,Art Pieces,Architecture,Paramateric Architecture,Kinetic Architecture,Notre Dame,Kia Motors,Mandala,Benediction,Twiddling Comfort,Furniture,Architecture"
                  />
                </div>
              </div>
            </div>
            <div className="chooseus-item mgb0">
              <TriangleText text={'Surreal'} />
              <div className="chooseus-canvas-item">
                <svg className="svg-hexagon">
                  <polygon
                    className="hexagon"
                    points="285 100,285 250,155 325,25 250,25 100,155 25"
                  ></polygon>
                </svg>
                <svg className="svg-triangle-dotted svg-tri-4">
                  <polygon
                    className="triangle-div"
                    points="2 220,254 220,128 0"
                  ></polygon>
                </svg>
                <div className="triangle-img-warp tri4">
                  <img
                    src="https://i.pinimg.com/600x315/4e/4c/95/4e4c958d9bd8091b05ba5f3134f5807f.jpg"
                    style={{ width: '130%', maxWidth: '200%' }}
                    className="img-responsive align-middle"
                    alt="Ardberry Technology,Gallery,Art Pieces,Architecture,Paramateric Architecture,Kinetic Architecture,Notre Dame,Kia Motors,Mandala,Benediction,Twiddling Comfort,Furniture,Architecture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaxgonDiv
