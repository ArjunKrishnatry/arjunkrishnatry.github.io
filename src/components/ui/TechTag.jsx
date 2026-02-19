/**
 * TechTag Component
 * Colored badge for technology/skill tags
 */

// Color mapping for common technologies
const techColors = {
  // Languages
  'JavaScript': 'bg-yellow-500/20 text-yellow-400',
  'TypeScript': 'bg-blue-500/20 text-blue-400',
  'Python': 'bg-green-500/20 text-green-400',
  'C++': 'bg-purple-500/20 text-purple-400',
  'Java': 'bg-orange-500/20 text-orange-400',
  'HTML': 'bg-orange-600/20 text-orange-400',
  'CSS': 'bg-blue-400/20 text-blue-300',

  // Frameworks
  'React': 'bg-cyan-500/20 text-cyan-400',
  'Node.js': 'bg-green-600/20 text-green-400',
  'Express': 'bg-gray-500/20 text-gray-300',
  'Flask': 'bg-gray-600/20 text-gray-300',
  'Django': 'bg-green-700/20 text-green-400',
  'Tailwind CSS': 'bg-teal-500/20 text-teal-400',
  'Next.js': 'bg-gray-700/20 text-gray-200',

  // Databases
  'MongoDB': 'bg-green-500/20 text-green-400',
  'PostgreSQL': 'bg-blue-600/20 text-blue-400',
  'MySQL': 'bg-blue-500/20 text-blue-300',
  'Redis': 'bg-red-500/20 text-red-400',

  // Tools
  'Git': 'bg-orange-500/20 text-orange-400',
  'Docker': 'bg-blue-500/20 text-blue-400',
  'AWS': 'bg-yellow-600/20 text-yellow-400',
  'Linux': 'bg-yellow-500/20 text-yellow-300',

  // Graphics
  'OpenGL': 'bg-blue-400/20 text-blue-300',
  'WebGL': 'bg-red-400/20 text-red-300',
};

export function TechTag({ tech }) {
  const colorClass = techColors[tech] || 'bg-primary/20 text-primary';

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded ${colorClass}`}>
      {tech}
    </span>
  );
}

export default TechTag;
