import { TechTag } from '../ui/TechTag';
import experienceData from '../../data/experience.json';

/**
 * Experience Section Component
 * Displays work experience as a vertical timeline
 */
export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <h2 className="section-title">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <ol className="relative border-l border-border ml-2 space-y-10">
          {experienceData.experience.map((job) => (
            <li key={job.id} className="pl-8 relative">
              <span
                className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary shadow-glow"
                aria-hidden="true"
              />
              <div className="p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-200">{job.role}</h3>
                  <span className="text-sm font-mono text-primary">{job.dates}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {job.company} • {job.location}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400 text-sm leading-relaxed mb-4">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <TechTag key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
