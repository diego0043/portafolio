import { data } from "../helpers/data.js";
import { CardProjects } from "./CardProjects.jsx";
export const Projects = () => {
  
  return (
    <>
      <div className="container-projects">
        {data.forEach((project) => {
          <div key={project.id} className="container-card">
            {project.title}
          </div>
        })}
      </div>
    </>
  );
};
