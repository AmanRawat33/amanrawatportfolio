import { NavLink } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="font-semibold blue-gradient_text drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones that I think you should have a look at.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front flex items-center justify-center rounded-xl">
                <img
                  src={project.iconUrl}
                  alt="Project icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-3 flex flex-col">
              <h4 className="font-poppins font-semibold text-2xl" >{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <NavLink
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live link
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"/>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200"/>
      <CTA />
    </section>
  );
};

export default Projects;
