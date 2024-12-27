import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow_purple } from "../assets/icons";
import CTA from "../components/CTA";

function Projects() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold">Projects</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-purple-100">
        <p>
          I've embarked on numerous projects that showcase my skills in web
          development, including building interactive websites, creating dynamic
          user interfaces, and developing full-stack applications.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold text-white">
                {project.name}
              </h4>
              <p className="mt-2 text-purple-100">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-purple-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow_purple}
                  alt="arrow_purple"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
}

export default Projects;
