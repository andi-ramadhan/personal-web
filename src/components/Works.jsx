import ProjectCard from "./ProjectCard";
import { projectData } from "./Projects.Data";

const projects = projectData

export default function Works() {
  return (
    <div className="flex flex-col justify-center items-center leading-relaxed text-pretty h-screen w-full">
      <div className="flex flex-col gap-3 shadow-2xl backdrop-blur-xl bg-white/20 rounded-xl p-5 [&>p]:text-md w-full">
        <h1 className="text-4xl pb-3" id="works">My Works</h1>
        <div className="container flex flex-col gap-2 w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}