import seus from "../assets/images/seusApp.svg";
import heroes from "../assets/images/heroesApp.png";

export const Projects = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide container-carousel container-fluid shadow p-3 mb-5 bg-body rounded"
        data-bs-ride="carousel"
      >
        <div className="row">
          <span className="text-center">Projects</span>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={seus} className="image-carousel" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div classNameName="row">
                <button className="btn-github">Github</button>
                <button className="btn-demo">Web</button>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={seus} className="image-carousel" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <button className="btn-github">Github</button>
              <button className="btn-demo">Web</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={seus} className="image-carousel" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <button className="btn-github">Github</button>
              <button className="btn-demo">Web</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
