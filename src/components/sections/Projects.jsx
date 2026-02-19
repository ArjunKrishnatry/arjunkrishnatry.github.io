import { ProjectCard } from '../ui/ProjectCard';
import projectsData from '../../data/projects.json';

/**
 * Projects Section Component
 * Displays a grid of expandable project cards
 */
export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="section-title">
          My <span className="text-gradient">Projects</span>
        </h2>

        <p className="text-gray-400 mb-8 max-w-2xl">
          Here are some of the projects I&apos;ve worked on. Click on any card to learn more
          about the project, the technologies used, and the challenges I faced.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
