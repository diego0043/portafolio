export const ServiceContainer = () => {
  return (
    <>
      <div className="container-fluid container-services">
        <div className="row">
          <span className="title-services">Specializing in</span>
          <span className="paragraph-services">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            numquam minima.
          </span>
        </div>
        <div className="row container-cards">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="card-service"></div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="card-service"></div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="card-service"></div>
          </div>
        </div>
      </div>
    </>
  );
};
