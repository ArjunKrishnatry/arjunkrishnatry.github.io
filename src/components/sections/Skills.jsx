import { SkillIcon } from '../ui/SkillIcon';
import skillsData from '../../data/skills.json';

/**
 * Skills Section Component
 * Displays skills grouped by category with icons
 */
export function Skills() {
  return (
    <section id="skills" className="section bg-surface">
      <div className="container-custom">
        <h2 className="section-title">
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="space-y-12">
          {skillsData.categories.map((category) => (
            <div key={category.name}>
              <h3 className="text-xl font-semibold text-gray-200 mb-6">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <SkillIcon
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
