import { data } from "../helpers/data.js";
import { CardProjects } from "./CardProjects.jsx";
export const Projects = () => {
  return (
    <>
      
      <div className="container-projects container row">
      <div className="row container-fluid">
        <span data-aos="fade-up" className="title-services">Projects</span>
      </div>
        {data.map((project) => {
          return <CardProjects key={project.id} {...project} />;
        })}
      </div>
    </>
  );
};
